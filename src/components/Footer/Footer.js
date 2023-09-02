import React, { useState } from 'react';
import "./footer.css";

const Footer = () => {
  const [mail, setShowEmail] = useState(false);

  const toggleEmail = () => {
    setShowEmail(true);
  };

  return (
    <div className="footer section__padding" id="contact">
      <div className="footer-heading">
        <h1 className="gradient__text">
          That's a wrap!
        </h1>
      </div>
      <div className="footer-links">
        <div className="footer-links_div">
          <h4>Links</h4>
          <p><a href="https://www.linkedin.com/in/iamssuraj/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          <p><a href="https://github.com/iamssuraj" target="_blank" rel="noopener noreferrer">GitHub</a></p>
        </div>
        <div className="footer-links_div">
          <h4>Get in touch</h4>
          {mail ? (
            <p><a href="mailto:suraj.sanganbhatla@gmail.com">suraj.sanganbhatla@gmail.com</a></p>
          ) : (
            <p onClick={toggleEmail}>Show e-mail</p>
          )}
        </div>
      </div>
      <div className="footer-copyrights">
        Thanks for your time!
      </div>
    </div>
  );
}

export default Footer;
