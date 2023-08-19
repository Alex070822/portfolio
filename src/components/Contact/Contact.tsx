import { css } from "@emotion/css";
import SectionTitle from "../SectionTitle/SectionTitle";

const contactCss = css`
  padding: 72px 24px 65px 24px;
  background-image: url("./src/assets/background-pattern.svg");
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

const contactFormCss = css`
  background-color: white;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  padding: 24px;
`;

const formLabelCss = css`
  display: inline-block;
  color: #68647d;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const formInputCss = css`
  font-family: "Roboto", sans-serif;
  color: #68647d;
  border: none;
  font-size: 14px;
  font-weight: 400;
  background-color: #e0e0e0;
  width: 100%;
  padding: 20px 16px;
  margin-bottom: 36px;
  border-radius: 2px;
`;

const formMessageCss = css`
  resize: none;
  line-height: 24px;
`;

const formSubmitBtnCss = css`
  display: block;
  background-color: #f8f301;
  border-radius: 2px;
  border: none;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1.2px;
  padding: 1rem;
  margin: 0 0 20px auto;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 250ms ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }
`;

function Contact() {
  return (
    <div className={contactCss} id="contact">
      <SectionTitle
        title="Contact"
        description="Please don't hesitate to reach out to me by using the form below. I will
        get back to you as soon as possible."
      />
      <form className={contactFormCss} action="mailto:agonzalez.dev1@gmail.com">
        <label htmlFor="name" className={formLabelCss}>
          Name
        </label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Your Name"
          aria-placeholder="Enter Your Name"
          className={formInputCss}
        />
        <br />
        <label htmlFor="email" className={formLabelCss}>
          Email
        </label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Your Email"
          aria-placeholder="Enter Your Email"
          className={formInputCss}
        />
        <br />
        <label htmlFor="message" className={formLabelCss}>
          Message
        </label>
        <br />
        <textarea
          rows="7"
          id="message"
          name="confirmationText"
          placeholder="Enter Your Message"
          aria-placeholder="Enter Your Message"
          className={`${formInputCss} ${formMessageCss}`}
        ></textarea>
        <br />
        <input
          type="submit"
          name="submit"
          value="submit"
          className={formSubmitBtnCss}
        />
      </form>
    </div>
  );
}

export default Contact;
