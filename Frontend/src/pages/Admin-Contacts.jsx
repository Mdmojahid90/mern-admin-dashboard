import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../store/auth-store";
import { Link } from "react-router-dom";

function AllContacts() {
  const [allContacts, setAllContacts] = useState([]);
  const { serverhost, token } = useContext(AuthContext);

  // Get all users logic
  const getAllContacts = async () => {
    try {
      const response = await fetch(`${serverhost}/api/admin/contacts`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        setAllContacts(responseData);
      }
    } catch (err) {
      console.log("Could Not finds All Contacts data url have some issue");
    }
  };
  useEffect(() => {
    getAllContacts();
  }, []);

  //Delete user by Id Request
  const handleOnDelete = async (contactId) => {
    try {
      const response = await fetch(
        `${serverhost}/api/admin/contact/delete/${contactId}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const responseData = await response.json();
      if (response.ok) {
        getAllContacts();
        toast.success(
          responseData.extraMessage
            ? responseData.extraMessage
            : responseData.message
        );
      } else {
        toast.error(
          responseData.extraMessage
            ? responseData.extraMessage
            : responseData.message
        );
      }
    } catch (err) {
      console.log("Contact URL Got Some Issue");
    }
  };

  return (
    <>
      <section className="section-table">
        <div className="container">
          <table className="table-container">
            <thead>
              <tr className="grid grid-five--cols">
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {allContacts.map((currElem) => (
                <tr key={currElem._id} className="grid grid-five--cols">
                  <td>{currElem.username}</td>
                  <td>{currElem.email}</td>
                  <td>{currElem.message}</td>
                  <td>
                    <Link
                      to={`/admin/contact/${currElem._id}/edit`}
                      className="edit-btn"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => handleOnDelete(currElem._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default AllContacts;
