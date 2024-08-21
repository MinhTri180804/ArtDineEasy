import React, { useId } from 'react';
import { IDropdownItem } from '../../../../../types/components/DropdownItem';
import './styles.scss';

interface IDropdownChildrenProps {
  itemData: IDropdownItem;
  handleSelect: (value: string | number) => void | React.ReactNode;
}

const DropdownChildren = ({
  handleSelect,
  itemData: { ImageRight, value, content },
}: IDropdownChildrenProps) => {
  const id = useId();

  return (
    <div
      className="dropdown__component-children-item"
      onClick={() => handleSelect(value)}
      key={`${id}`}
    >
      {ImageRight && (
        <div className="logo">
          {typeof ImageRight === 'string' ? (
            <img src={ImageRight} alt="" />
          ) : (
            <ImageRight />
          )}
        </div>
      )}

      <div className="content">{content}</div>
    </div>
  );
};

export { DropdownChildren };
