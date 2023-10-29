import React from "react";
import "./styles.scss";

const MainCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`container main_card ${className || ""}`}>{children}</div>
  );
};

export default MainCard;
