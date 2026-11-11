import emailjs from '@emailjs/browser';
import { useState } from "react";
import SectionTitle from "./SectionTitle";

const contactInfo = [
  {
    id: 1,
    label: "Phone",
    value: "+1 (800) 555-0199",
    altLabel: "Alt Line",
    altValue: "+1 (800) 555-0144",
    link: "tel:+18005550199",
    altLink: "tel:+18005550144",
    icon: "fas fa-phone-alt",
  },
  {
    id: 2,
    label: "Email",
    value: "hello@nextlevelplay.com",
    altLabel: "Alt Mail",
    altValue: "support@nextlevelplay.com",
    link: "mailto:hello@nextlevelplay.com",
    altLink: "mailto:support@nextlevelplay.com",
    icon: "fas fa-envelope",
  },
  {
    id: 3,
    label: "Studio Locations",
    value: "Midtown Tech Tower, New York, NY",
    altLabel: "Alt Studio",
    altValue: "Innovation Hub, Suite 400, Austin, TX",
    icon: "fas fa-map-marker-alt",
  },
  {
    id: 4,
    label: "Operating Hours",
    value: "Mon - Fri: 9:00 AM - 6:00 PM EST",
    altLabel: "Alt Support",
    altValue: "24/7 Client Emergency Desk",
    icon: "fas fa-clock",
  },
];

const Contact = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });
  const { name, email, subject, message } = mailData;
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const onChange = (e) => {
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      name.length === 0 ||
      email.length === 0 ||
      message.length === 0 ||
      subject.length === 0
    ) {
      setError(true);
    } else {
      emailjs
        .send(
          "service_lanhqx8", // service id
          "template_ss6bkgy", // template id
          mailData,
          "9r-ygM5eF4uNVaQ-x" // public api
        )
        .then(
          (response) => {
            setError(false);
            setSuccess(true);
            setTimeout(() => {
              setSuccess(false);
            }, 3000);
            setMailData({ name: "", email: "", message: "", subject: "" });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };

  return (
    <section id="contactus" className="section contactus-section bg-gray">
      <div className="container">
        <SectionTitle
          heading={"Let's Discuss Project"}
          subHeading={"Contact"}
        />
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-form">
              <h6>Get in touch</h6>
              <p className="lead">
                Our friendly team would love to hear from you.
              </p>
              <form id="contact-form" onSubmit={(e) => onSubmit(e)}>
                <div className="row gx-3 gy-4">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">First name</label>
                      <input
                        name="name"
                        onChange={(e) => onChange(e)}
                        value={name}
                        id="name"
                        placeholder="Name *"
                        className={`form-control ${
                          error ? (name.length !== 0 ? "" : "invalid") : ""
                        }`}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Your Email</label>
                      <input
                        name="email"
                        onChange={(e) => onChange(e)}
                        value={email}
                        id="email"
                        placeholder="Email *"
                        className={`form-control ${
                          error ? (email.length !== 0 ? "" : "invalid") : ""
                        }`}
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label className="form-label">Subject</label>
                      <input
                        name="subject"
                        onChange={(e) => onChange(e)}
                        value={subject}
                        id="subject"
                        placeholder="Subject *"
                        className={`form-control ${
                          error ? (subject.length !== 0 ? "" : "invalid") : ""
                        }`}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="form-label">Your message</label>
                      <textarea
                        name="message"
                        onChange={(e) => onChange(e)}
                        value={message}
                        id="message"
                        placeholder="Your message *"
                        rows={3}
                        className={`form-control ${
                          error ? (message.length !== 0 ? "" : "invalid") : ""
                        }`}
                      />
                    </div>
                    <span
                      id="suce_message"
                      className="text-success"
                      style={{ display: success ? "block" : "none" }}
                    >
                      Message Sent Successfully
                    </span>
                  </div>
                  <div className="col-md-12">
                    <div className="send">
                      <button
                        className="px-btn px-btn-theme2"
                        type="submit"
                        value="Send"
                      >
                        {" "}
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 ms-auto col-xl-4 pt-5 pt-lg-0">
            <ul className="contact-infos">
              {contactInfo.map((contact) => (
                <li key={contact.id}>
                  <div className="icon">
                    <i className={contact.icon} />
                  </div>
                  <div className="col">
                    <h5>{contact.label}</h5>
                    <p style={{ fontSize: "18px", lineHeight: "1.3" }}>
                      {contact.link ? (
                        <a
                          href={contact.link}
                          style={{ color: "inherit", textDecoration: "none" }}
                        >
                          {contact.value}
                        </a>
                      ) : (
                        contact.value
                      )}
                    </p>
                    {contact.altValue && (
                      <div
                        style={{
                          marginTop: "6px",
                          fontSize: "13px",
                          color: "#555",
                          lineHeight: "1.4",
                        }}
                      >
                        <span
                          style={{
                            display: "inline-block",
                            padding: "2px 7px",
                            backgroundColor: "rgba(92, 100, 207, 0.12)",
                            color: "#5c64cf",
                            borderRadius: "4px",
                            fontWeight: 600,
                            fontSize: "11px",
                            marginRight: "6px",
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                          }}
                        >
                          {contact.altLabel}
                        </span>
                        {contact.altLink ? (
                          <a
                            href={contact.altLink}
                            style={{
                              color: "#18171c",
                              fontWeight: 500,
                              textDecoration: "none",
                            }}
                          >
                            {contact.altValue}
                          </a>
                        ) : (
                          <span style={{ color: "#18171c", fontWeight: 500 }}>
                            {contact.altValue}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <div className="text-center pt-5">
              <img
                src="assets/img/footer.png"
                className="svg footer-img"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
