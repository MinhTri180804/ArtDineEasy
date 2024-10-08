import React, { ComponentType, ReactElement, useId } from 'react';
import renderIcon from '../../../utils/renderIcon';
import DropdownChildren from './Partials/DropdownChildren';
import './styles.scss';

interface IDropdown {
  IconLeft?: JSX.Element;
  ImageRight?: string | ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  classNames?: string;
  children?:
    | ReactElement<typeof DropdownChildren>
    | ReactElement<typeof DropdownChildren>[];
}

const Dropdown = ({
  IconLeft,
  ImageRight,
  title,
  classNames,
  children,
}: IDropdown) => {
  const id = useId();

  // condition render for dropdown have both is icon left and image right
  if (IconLeft && ImageRight) {
    return (
      <div
        className={`dropdown__component ${id} icon__left image__right ${
          classNames ?? ''
        }`}
      >
        <div className="dropdown__component-title">
          <div className="dropdown__component-title--icon">
            {renderIcon({ Icon: ImageRight, textAlt: 'flag image' })}
          </div>

          <div className="dropdown__component-title--value">Việt Nam</div>
        </div>

        <div className="dropdown__component-icon">{IconLeft}</div>

        <div className="dropdown__component-children">{children}</div>
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

        <div className="dropdown__component-icon">{IconLeft}</div>

        <div className="dropdown__component-children">{children}</div>
      </div>
    );
  }

  // condition render for dropdown has only image right
  if (ImageRight) {
    return (
      <div
        className={`dropdown__component ${id}  image__right ${
          classNames || ''
        }`}
      >
        <div className="dropdown__component-title">
          <div className="dropdown__component-title--icon">
            {renderIcon({ Icon: ImageRight, textAlt: 'flag image' })}
          </div>

          <div className="dropdown__component-title--value">{title}</div>
        </div>

        <div className="dropdown__component-children">{children}</div>
      </div>
    );
  }

  // condition render for dropdown default, don't have icon left or image right
  return (
    <div className={`dropdown__component ${id}   ${classNames ?? ''}`}>
      <div className="dropdown__component-title">
        <div className="dropdown__component-title--value">{title}</div>
      </div>

      <div className="dropdown__component-children">{children}</div>
    </div>
  );
};

export { Dropdown };
