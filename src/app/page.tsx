"use client";
import "bootstrap/dist/css/bootstrap.css";
import "./page.scss";
import { useEffect } from "react";
import ContactInfoCard from "./contact-info-card";
import Home from "./home";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

//https://codewithsadee.github.io/vcard-personal-portfolio/
export default function Page() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <div className="main_body main_theme_color">
      <div className="container py-5 mx-auto">
        <div className="row">
          <div className="col-3">
            <ContactInfoCard />
          </div>
          <div className="col-9">
            <Home />
          </div>
        </div>
      </div>
    </div>
  );
}
