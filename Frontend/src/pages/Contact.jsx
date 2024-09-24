import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../store/auth-store";

function Contact() {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const { serverhost, user } = useContext(AuthContext);
  const [userData, setUserData] = useState(true);

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact({ ...contact, [name]: value });
  };

  if (user && userData) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(contact);
    try {
      const response = await fetch(`${serverhost}/api/form/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact),
      });
      const responseData = await response.json();
      if (response.ok) {
        toast.success(
          responseData.extraMessage
            ? responseData.extraMessage
            : responseData.message
        );

        setContact({ message: "" });
      } else {
        toast.error(
          responseData.extraMessage
            ? responseData.extraMessage
            : responseData.message
        );
      }
    } catch (err) {
      console.log("Contact message error", err);
    }
  };

  return (
    <>
      <section className="section-contact">
        <div className="container">
          <div className="contact-form">
            <h2 className="common-heading text-center">Contact Form</h2>
            <form onSubmit={handleOnSubmit}>
              <div className="mb-3">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  value={contact.username}
                  onChange={handleOnChange}
                  placeholder="Enter Your Name"
                  required
                  autoComplete="off"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={contact.email}
                  onChange={handleOnChange}
                  placeholder="Enter Your Email"
                  required
                  autoComplete="off"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  value={contact.message}
                  onChange={handleOnChange}
                  id="message"
                  cols="50"
                  rows="15"
                ></textarea>
              </div>

              <div className="btn-div">
                <button type="submit" className="btn">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
