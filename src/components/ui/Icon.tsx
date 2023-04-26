import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface IIconProps{
  icon: IconProp;
  // All other props
  [x:string]: any;
}

function Icon(props: IIconProps) {
  const {icon, ...rest} = props;

    return (
      <FontAwesomeIcon icon={icon} {...rest} />
    );
}

export default Icon;