import React, { useState } from 'react';
import { useIntersection } from '../../data/hooks/useIntersection';
import {Preloader} from '../../components';

interface IPicture {
  src: string,
  parentClass: string
}

function Picture({ src, parentClass }: IPicture) {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setLoaded] = useState(false);

  const imgRef = React.useRef<any>();

  useIntersection(imgRef, () => {
    // setIsInView(true);
  }, );

  const onLoad = () => {
    // setLoaded(true)
  
    setLoaded(false)}

  return (
    <div
      className={`${parentClass} picture picture-${isLoaded ? 'noPlaceholder' : ''}`}
      ref={imgRef}
      // style={{
      //   paddingBottom: `${(height / width) * 100}%`,
      // }}
    >
      {
        !isLoaded && <Preloader />
      }
      
      {isInView && (
        <img
          className='picture_image'
          src={src}
          onLoad={onLoad}
        />
      )}
    </div>
  );
}

export default Picture;