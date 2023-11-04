import "./styles.scss";
import React from "react";

const ContactListItem = ({
  icon,
  title,
  link,
}: {
  icon: React.ReactElement;
  title: string;
  link: React.ReactElement;
}) => {
  return (
    <div className="row contact-list-item-container">
      <div className="col-2 contact-list-item-container d-flex justify-content-center align-items-center">
        <div className="contact-icon">{icon}</div>
      </div>
      <div className="col contact-list-item-container text-start">
        <div>
          <p className="contact-info-title">{title}</p>
          {link}
        </div>
      </div>
    </div>
  );
};

export default ContactListItem;
