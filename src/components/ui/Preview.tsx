import React from "react";
import s from '../../assets/scss/components/ui/Preview.module.scss';

function Preview() {
  return (
    // предзагрузка
    <div className={s.preview} style={{backgroundImage: `url(${process.env.REACT_APP_URL}/preview.png)`}}>
      <div className="column">
        Preview
      </div>
    </div>
  );
}

export default Preview;
