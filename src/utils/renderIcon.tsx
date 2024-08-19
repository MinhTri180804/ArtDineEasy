import React, { ComponentType } from 'react';

interface IIconType {
  Icon?: string | ComponentType<React.SVGProps<SVGSVGElement>>;
  textAlt?: string;
}

const renderIcon = ({ Icon, textAlt }: IIconType) => {
  if (!Icon) {
    return null;
  }

  if (typeof Icon === 'string') {
    return <img src={Icon} alt={textAlt} />;
  }

  return <Icon />;
};

export default renderIcon;
