import React, { ComponentType, useId } from 'react';
import './styles.scss';

interface IDropdown {
  IconLeft?: ComponentType<React.SVGProps<SVGSVGElement>>;
  imageRight?: string;
  title: string;
  classNames?: string;
}

const Dropdown = ({ IconLeft, imageRight, title, classNames }: IDropdown) => {
  const id = useId();

  // condition render for dropdown have both is icon left and image right
  if (IconLeft && imageRight) {
    return (
      <div
        className={`dropdown__component ${id} icon__left image__right ${
          classNames ?? ''
        }`}
      >
        <div className="dropdown__component-title">
          <div className="dropdown__component-title--icon">
            <img src={imageRight} alt="" />
          </div>

          <div className="dropdown__component-title--value">Việt Nam</div>
        </div>

        <div className="dropdown__component-icon">
          <IconLeft />
        </div>
      </div>
    );
  }

  // condition render for dropdown has only icon left
  if (IconLeft) {
    return (
      <div
        className={`dropdown__component ${id} icon__left ${classNames ?? ''}`}
      >
        <div className="dropdown__component-title">
          <div className="dropdown__component-title--value">Việt Nam</div>
        </div>

        <div className="dropdown__component-icon">
          <IconLeft />
        </div>
      </div>
    );
  }

  // condition render for dropdown has only image right
  if (imageRight) {
    return (
      <div
        className={`dropdown__component ${id}  image__right ${
          classNames || ''
        }`}
      >
        <div className="dropdown__component-title">
          <div className="dropdown__component-title--icon">
            <img src={imageRight} alt="" />
          </div>

          <div className="dropdown__component-title--value">{title}</div>
        </div>
      </div>
    );
  }

  // condition render for dropdown default, don't have icon left or image right
  return (
    <div className={`dropdown__component ${id}   ${classNames ?? ''}`}>
      <div className="dropdown__component-title">
        <div className="dropdown__component-title--value">{title}</div>
      </div>
    </div>
  );
};

export { Dropdown };
