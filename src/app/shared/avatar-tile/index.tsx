import Image from "next/image";
import React from "react";
import "./styles.scss";

const AvatarTile = ({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) => {
  return (
    <div className=" d-flex justify-content-center align-items-center">
      <div className="avatar-container">
        <Image
          className="img-fluid"
          src={src}
          alt={alt}
          width={width}
          height={height}
        />
      </div>
    </div>
  );
};

export default AvatarTile;
