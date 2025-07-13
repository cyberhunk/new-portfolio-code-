import { useState } from "react";
import "./Contact.scss";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!form.fullName.trim()) {
      errors.fullName = "Full name is required";
      isValid = false;
    }

    if (!form.email.trim()) {
      errors.email = "Email address is required";
      isValid = false;
    }

    if (!form.phone.trim()) {
      errors.phone = "Phone number is required";
      isValid = false;
    }

    if (!form.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the page from reloading on form submit
    if (validateForm()) {
      setLoading(true);

      emailjs
        .send(
          "service_lx61kij",
          "template_zkfwm9r",

          {
            from_name: form.fullName,
            to_name: "satyam vishwakarma",
            from_email: form.email,
            to_email: "satya.pk0011@gmail.com",
            phone: form.phone,
            message: form.message,
          },
          "3rrYj7LJM9OOJwvr_"
        )
        .then(
          () => {
            setLoading(false);
            alert("Thank you. I'll get back to you as soon as possible.");
            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            console.log(error);
            alert("Something went wrong.");
          }
        );
    }
  };

  return (
    <section id="contact" className="padding-horizontal contact-container">
      <div className="container">
        <div className="contact-options">
          <h1 className="heading-1">
            <span className="heading">Let's Work Together</span>
          </h1>

          <p className="para">
            I'm always open to exciting opportunities, collaborations, or even
            just a casual chat about technology, coding, and all things digital!
            Whether you have a project in mind, need some advice, or just want
            to connect, feel free to reach out.
          </p>

          <div className="options">
            <a href="mailto:sethip52@gmail.com" className="option">
              <div className="icon-wrapper">
                <MdEmail />
              </div>
              <span >satyamvishwakarma1819@gmail.com</span>
            </a>

            <a href="#" className="option">
              <div className="icon-wrapper">
                <FaPhoneAlt />
              </div>
              <span>+91-8305 101819</span>
            </a>

            <a href="#" className="option">
              <div className="icon-wrapper">
                <IoLocationSharp />
              </div>
              <span>Indore Madhya Pradesh</span>
            </a>
          </div>
        </div>

        <div className="contact-form">
          <div className="top">
            <p className="subheading">
              Need help? Reach out for any project or inquiries. I am here for
              you.
            </p>
          </div>

          <div className="middle">
            <div className="row">
              <div className="inner-row">
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Full name"
                  className="control"
                />
                {formErrors.fullName && (
                  <span className="error">{formErrors.fullName}</span>
                )}
              </div>
            </div>

            <div className="row">
              <div className="inner-row">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className="control"
                />
                {formErrors.email && (
                  <span className="error">{formErrors.email}</span>
                )}
              </div>

              <div className="inner-row">
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="control"
                />
                {formErrors.phone && (
                  <span className="error">{formErrors.phone}</span>
                )}
              </div>
            </div>

            <div className="inner-row">
              <textarea
                placeholder="Message"
                cols={30}
                rows={10}
                name="message"
                value={form.message}
                onChange={handleChange}
                className="control"
              ></textarea>
              {formErrors.message && (
                <span className="error">{formErrors.message}</span>
              )}
            </div>
          </div>

          <div className="bottom">
            <button
              className="btn button"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
