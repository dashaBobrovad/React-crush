import React, { useEffect, useState } from 'react';
import { useIntersection } from '../../data/hooks/useIntersection';

interface IPicture {
  src: string,
  width: number,
  height: number,
}

function Picture({ src, width, height }: IPicture) {

  // перенести в хук
  const [isInView, setIsInView] = useState(false);

  const imgRef = React.useRef<any>();

  useIntersection(imgRef, () => {
    setIsInView(true);
  }, );

  // let listenerCallbacks = new WeakMap();

  // let observer: any;

  // function handleIntersections(entries: any) {
  //   entries.forEach((entry: any) => {
  //     if (listenerCallbacks.has(entry.target)) {
  //       let cb = listenerCallbacks.get(entry.target);

  //       if (entry.isIntersecting || entry.intersectionRatio > 0) {
  //         observer.unobserve(entry.target);
  //         listenerCallbacks.delete(entry.target);
  //         cb();
  //       }
  //     }
  //   });
  // }

  // function getIntersectionObserver() {
  //   if (observer === undefined) {
  //     observer = new IntersectionObserver(handleIntersections, {
  //       rootMargin: '100px',
  //       threshold: '0.15' as any,
  //     });
  //   }
  //   return observer;
  // }

  // function useIntersection(elem: any, callback: any) {
  //   useEffect(() => {
  //     let target = elem.current;
  //     let observer = getIntersectionObserver();
  //     listenerCallbacks.set(target, callback);
  //     observer.observe(target);

  //     return () => {
  //       listenerCallbacks.delete(target);
  //       observer.unobserve(target);
  //     };
  //   }, []);
  // }


  return (
    <div
      className="picture"
      ref={imgRef}
      style={{
        paddingBottom: `${(height / width) * 100}%`,
        // width: '100%'
      }}
    >
      {isInView && (
        <img
          className='picture_image'
          src={src}
        />
      )}
    </div>
  );
}

export default Picture;