import React, { ComponentType, useId } from 'react';

interface IDropdown {
  IconLeft?: ComponentType<React.SVGProps<SVGSVGElement>>;
  ImageRight?: ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  classNames?: string;
}

const Dropdown = ({ IconLeft, ImageRight, title, classNames }: IDropdown) => {
  const id = useId();

  // condition render for dropdown have both is icon left and image right
  if (IconLeft && ImageRight) {
    return (
      <div
        className={`dropdown__component ${id} icon__left image__right ${
          classNames && classNames
        }`}
      >
        <div className="dropdown__component-title">
          <div className="dropdown__component-title--icon">
            <ImageRight />
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
        className={`dropdown__component ${id} icon__left ${
          classNames && classNames
        }`}
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
  return (
    <div
      className={`dropdown__component ${id}  image__right ${
        classNames && classNames
      }`}
    >
      <div className="dropdown__component-title">
        <div className="dropdown__component-title--icon">
          {ImageRight && <ImageRight />}
        </div>

        <div className="dropdown__component-title--value">{title}</div>
      </div>
    </div>
  );
};

export { Dropdown };
