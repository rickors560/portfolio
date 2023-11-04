import ContactListItem from "../contact-list-item";
import "./styles.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const contactInformation: any = {
  email: {
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    title: "Email",
    link: (
      <a href="mailto:rickors560@gmail.com" className="contact-info-link">
        rickors560@gmail.com
      </a>
    ),
  },
  birthday: {
    icon: <FontAwesomeIcon icon={faCalendarDays} />,
    title: "Birthday",
    link: <p className="contact-info-link">September 14, 1999</p>,
  },
  location: {
    icon: <FontAwesomeIcon icon={faLocationDot} />,
    title: "Location",
    link: <p className="contact-info-link">Alwar, Rajasthan, India</p>,
  },
};

const ContactList = () => {
  return (
    <div className="row">
      <ul className="contact-list list-group mx-3">
        {Object.keys(contactInformation).map((key) => {
          const { icon, title, link } = contactInformation[key];
          return (
            <li key={1} className="list-group-item my-1">
              <ContactListItem icon={icon} title={title} link={link} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
