import React from 'react';
import s from '../../assets/scss/components/ui/Preloader.module.scss'
const Preloader = () => {
  return ( 
    <div className={s.preloader_wrapper}>
    <div className={s.preloader}><div></div><div></div></div>
    </div>
   );
}
 
export default Preloader;