import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../store/auth-store";
import { toast } from "react-toastify";

function AdminContactUpdate() {
  const [contactData, setContactData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const params = useParams();

  const { serverhost, token } = useContext(AuthContext);

  //Changeing Contact Data Logic
  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContactData({ ...contactData, [name]: value });
  };

  //get contact data logic

  const getContactData = async () => {
    try {
      const response = await fetch(
        `${serverhost}/api/admin/contact/${params.id}`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const responseData = await response.json();
      if (response.ok) {
        setContactData(responseData);
      } else {
        console.log("Did not Get Contact Data From Backend");
      }
    } catch (err) {
      console.log("Did not get contact data URL got some issue");
    }
  };

  useEffect(() => {
    getContactData();
  }, []);

  //Handle on Submit Sending data to backend logic
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${serverhost}/api/admin/contact/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(contactData),
        }
      );

      const responseData = await response.json();
      if (response.ok) {
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
      console.log("Contact Not Updated URL have some issue");
    }
  };

  return (
    <>
      <section className="section-contact--update">
        <div className="container">
          <div className="contact-edit--form">
            <h2 className="common-heading text-center">Update Contact</h2>
            <form onSubmit={handleOnSubmit}>
              <div className="mb-3">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="username"
                  value={contactData.username}
                  onChange={handleOnChange}
                  required
                  autoComplete="off"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={contactData.email}
                  onChange={handleOnChange}
                  required
                  autoComplete="off"
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  id="message"
                  cols="50"
                  rows="15"
                  onChange={handleOnChange}
                  value={contactData.message}
                />
              </div>
              <div className="btn-div">
                <button type="submit" className="btn">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
export default AdminContactUpdate;
