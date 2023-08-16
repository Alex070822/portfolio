import "./Contact.css";
import SectionTitle from "../SectionTitle/SectionTitle";

function Contact() {
  return (
    <div className="contact" id="contact">
      <SectionTitle
        title="Contact"
        description="Please don't hesitate to reach out to me by using the form below. I will
        get back to you as soon as possible."
      />
      <form className="contact-form" action="mailto:agonzalez.dev1@gmail.com">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Your Name"
          aria-placeholder="Enter Your Name"
          className="form-input"
        />
        <br />
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Your Email"
          aria-placeholder="Enter Your Email"
          className="form-input"
        />
        <br />
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <br />
        <textarea
          rows="7"
          id="message"
          name="confirmationText"
          placeholder="Enter Your Message"
          aria-placeholder="Enter Your Message"
          className="form-input form-message"
        ></textarea>
        <br />
        <input
          type="submit"
          name="submit"
          value="submit"
          className="form-submit-btn"
        />
      </form>
    </div>
  );
}

export default Contact;
