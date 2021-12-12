import { useState, useRef } from "react";
import { sendForm, init } from "emailjs-com";
import contactUsImage from "../assets/contactUs.png";
import Modal from "./Modal";

init("user_h2IHQvqREp9V1FV4kbt5q");


const ContactForm = ({ input_number }) => {
  const [data, setData] = useState({});
  const ref = useRef();

  // Form data handler
  const handleData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  // Form submit handler
  const serviceid = process.REACT_APP_serviceid;
  const templateid = process.env.REACT_APP_templateid;
  const userid = process.env.REACT_APP_userid;
  const handleSubmit = (e) => {
    e.preventDefault();
    
    sendForm("service_3gsiwul", "template_hfpn1tx", ref.current).then(
      function (response) {
        document
          .querySelector("#contact-form-success-modal")
          .classList.add("active");
      },
      function (error) {
        console.log(error);
        alert("Failed to send email");
      }
    );
  };

  return (
    <div className="homepage-contact-form" id="contact-section">
      <div className="max-width-cont">
        <div className="heading">
          <h3 role="heading">Contact Us</h3>
          <div className="subheading">
            <p>
              Stepaw is always open to connect with you!
            </p>
          </div>
        </div>
        
        <div className="gplayContainer">
          <button className="gplay" onClick={()=>window.location.href="https://play.google.com/store/apps/details?id=com.butterflies.stepaw"}></button>
        </div>

        <div className="contactUSContainer">
          <div className="contactUsImage">
            <img src={contactUsImage} alt="Image" />
          </div>
          <div className="form">
            <form ref={ref} onSubmit={(e) => handleSubmit(e)}>
              <div className="input-group">
                {input_number.map((input, i) => (
                  <input
                    name={input[1].name}
                    key={input.toString + i}
                    onChange={(e) => handleData(e)}
                    title={input[1].title}
                    placeholder={input[1].placeholder}
                    required
                    type={input[1].type}
                    required
                  />
                ))}
                <textarea
                  name="feedback"
                  onChange={(e) => handleData(e)}
                  role="textbox"
                  aria-label="Enter your feedback"
                  placeholder="Share your feedback"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button
                role="button"
                aria-label="submit contact form"
                title="submit"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="copyright">
              <span>Copyright© 2021 Stepaw All right reserved</span>
        </div>
        
        
      </div>
      <Modal
        id={"contact-form-success-modal"}
        message={"Thank you for the feedback!"}
      />
    </div>
  );
};

export default ContactForm;