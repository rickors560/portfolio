import React from "react";
import "./main-card.scss";

const MainCard = ({ children }: { children?: React.ReactNode }) => {
  return <div className="container main_card">{children}Main</div>;
};

export default MainCard;
