"use client";
import "bootstrap/dist/css/bootstrap.css";
import "./page.scss";
import { useEffect } from "react";
import MainCard from "./shared/main-card/MainCard";

export default function Page() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <div className="main_body main_theme_color">
      <div className="container py-5 mx-auto">
        <div className="row">
          <div className="col-3">
            <MainCard>
              <button>Click Me</button>
            </MainCard>
          </div>
          <div className="col-9">
            <MainCard />
          </div>
        </div>
      </div>
    </div>
  );
}
