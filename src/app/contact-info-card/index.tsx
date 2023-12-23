import React from "react";
import MainCard from "../shared/main-card";
import "./styles.scss";
import AvatarTile from "../shared/avatar-tile";
import ContactList from "./contact-list";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

function ContactInfoCard() {
  return (
    <MainCard className="contact-container text-center">
      <div className="row">
        <AvatarTile
          src="/assets/avatar.png"
          alt="Ritik Sharma"
          width={100}
          height={100}
        />
      </div>
      <p className="h3 mt-2">
        <b>Ritik Sharma</b>
      </p>
      <div className="title-container mx-5 px-1 d-flex justify-content-center align-items-center">
        <p className="m-auto">Full Stack Developer</p>
      </div>

      <hr className="separator mx-3" />
      <ContactList />

      <div className="row mt-4 d-flex justify-content-center align-items-center">
        <div className="col">
          <Link
            href="https://www.linkedin.com/in/ritik-sharma-b14149190/"
            target="_blank"
            className="socials mx-2"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link
            href="https://github.com/rickors560"
            target="_blank"
            className="socials mx-2"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>
          <Link
            href="https://medium.com/@rickors560"
            target="_blank"
            className="socials mx-2"
          >
            <FontAwesomeIcon icon={faMedium} />
          </Link>
          <Link
            href="https://stackoverflow.com/users/20889523/ritik-sharma"
            target="_blank"
            className="socials mx-2"
          >
            <FontAwesomeIcon icon={faStackOverflow} />
          </Link>
        </div>
      </div>
    </MainCard>
  );
}

export default ContactInfoCard;
