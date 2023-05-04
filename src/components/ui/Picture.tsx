import React, { useState } from "react";
import useIntersection from "../../data/hooks/useIntersection";
import { Preloader } from "..";

interface IPicture {
  src: string;
  parentClass: string;
}

function Picture({ src, parentClass }: IPicture) {
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
      // style={{
      //   paddingBottom: `${(height / width) * 100}%`,
      // }}
    >
      {!isLoaded && <Preloader />}
      {/* TODO: передавать правильный alt */}
      {isInView && (
        <img className="picture_image" src={src} onLoad={onLoad} alt={src} />
      )}
    </div>
  );
}

export default Picture;
