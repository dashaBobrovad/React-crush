import React, { useState } from "react";
import useIntersection from "../../../data/hooks/useIntersection";
import Preloader from "../Preloader/Preloader";
// import s from "./Picture.module.scss";

interface IPicture {
  src: string;
  parentClass: string;
  alt?: string;
}

function Picture({ src, parentClass, alt }: IPicture) {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setLoaded] = useState(false);

  const imgRef = React.useRef<any>();

  useIntersection(imgRef, () => {
    setIsInView(true);
  });

  const onLoad = () => {
    setLoaded(true);
  };

  return (
    <div
      className={`${parentClass} picture picture-${
        isLoaded ? "noPlaceholder" : ""
      }`}
      ref={imgRef}
    >
      {!isLoaded && <Preloader />}
      {isInView && (
        <img className="picture_image" src={src} onLoad={onLoad} alt={alt} />
      )}
    </div>
  );
}

Picture.defaultProps = {
  alt: "image",
};

export default Picture;
