import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface IconProps{
  icon: IconProp;
}

function Icon({icon}: IconProps) {
    return (
      <FontAwesomeIcon icon={icon} />
    );
}

export default Icon;