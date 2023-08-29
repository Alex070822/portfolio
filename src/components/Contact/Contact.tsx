import { css } from "@emotion/css";
import { widthBreakpoint } from "../shared";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const contactCss = css`
  padding: 72px 24px 65px 24px;
  background-image: url("/assets/background-pattern.svg");
  scroll-snap-align: start;
  scroll-snap-stop: always;

  @media (min-width: ${widthBreakpoint.md}px) {
    padding: 72px 48px 96px 48px;
  }

  @media (min-width: ${widthBreakpoint.lg}px) {
    padding: 88px 200px 96px 200px;
  }
`;

const contactFormCss = css`
  background-color: white;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  padding: 24px;

  @media (min-width: ${widthBreakpoint.md}px) {
    padding: 32px 48px 52px 48px;
  }

  @media (min-width: ${widthBreakpoint.lg}px) {
    padding: 32px 48px 52px 48px;
  }
`;

const formLabelCss = css`
  display: inline-block;
  color: #68647d;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 12px;

  @media (min-width: ${widthBreakpoint.md}px) {
    font-size: 26px;
    margin-bottom: 20px;
  }
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
  margin-bottom: 24px;
  border-radius: 2px;

  @media (min-width: ${widthBreakpoint.md}px) {
    font-size: 26px;
    padding: 28px 24px;
    margin-bottom: 44px;
  }
`;

const formMessageCss = css`
  resize: none;
  line-height: 24px;

  @media (min-width: ${widthBreakpoint.md}px) {
    line-height: normal;
  }
`;

const submitMessageCss = css`
  color: green;
  font-size: 14px;
  font-weight: 700;
  text-align: right;
  margin-bottom: 12px;

  @media (min-width: ${widthBreakpoint.md}px) {
    font-size: 26px;
    margin-bottom: 44px;
  }
`;

const submitErrorCss = css`
  color: red;
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

  @media (min-width: ${widthBreakpoint.md}px) {
    font-size: 28px;
    letter-spacing: 2.1px;
  }
`;

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isFormSubmitError, setIsFormSubmitError] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentForm = form.current;
    if (currentForm) {
      try {
        await emailjs.sendForm(
          "service_7349cnp",
          "template_an1g99s",
          currentForm,
          "KibCTVkzJpW_dUgAW"
        );

        currentForm.reset();
        setIsFormSubmitted(true);
      } catch (error) {
        setIsFormSubmitError(true);
      }
    }
  };

  return (
    <div className={contactCss} id="contact">
      <SectionTitle
        title="Contact"
        description="Please don't hesitate to reach out to me by using the form below. I will
        get back to you as soon as possible."
      />
      <form className={contactFormCss} ref={form} onSubmit={sendEmail}>
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
          required
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
          required
        />
        <br />
        <label htmlFor="message" className={formLabelCss}>
          Message
        </label>
        <br />
        <textarea
          rows={9}
          id="message"
          name="message"
          placeholder="Enter Your Message"
          aria-placeholder="Enter Your Message"
          className={`${formInputCss} ${formMessageCss}`}
          required
        ></textarea>
        <br />
        {isFormSubmitted && !isFormSubmitError ? (
          <>
            <div className={submitMessageCss}>Message sent successfully!</div>{" "}
            <br />
          </>
        ) : null}
        {!isFormSubmitted && isFormSubmitError ? (
          <>
            <div className={`${submitMessageCss} ${submitErrorCss}`}>
              Message sending failed. Please try again later.
            </div>
            <br />
          </>
        ) : null}
        <input
          type="submit"
          name="submit"
          value="submit"
          className={formSubmitBtnCss}
        />
      </form>
    </div>
  );
};

export default Contact;
