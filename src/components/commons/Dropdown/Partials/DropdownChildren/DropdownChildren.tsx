import { useId } from 'react';
import { IDropdownItem } from '../../../../../types/components/DropdownItem';
import './styles.scss';

interface IDropdownChildren {
  childrenData: IDropdownItem[];
}
const DropdownChildren = ({ childrenData }: IDropdownChildren) => {
  const id = useId();

  return (
    <div className="dropdown__component-children">
      {childrenData.map((item: IDropdownItem, index: number) => (
        <div
          className="dropdown__component-children-item"
          key={`${id}-${index}`}
        >
          {item.ImageRight && (
            <div className="logo">
              {typeof item.ImageRight === 'string' ? (
                <img src={item.ImageRight} alt="" />
              ) : (
                <item.ImageRight />
              )}
            </div>
          )}

          <div className="content">{item.content}</div>
        </div>
      ))}
    </div>
  );
};

export { DropdownChildren };
