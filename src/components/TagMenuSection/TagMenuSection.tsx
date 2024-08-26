import './styles.scss';

interface ITagMenuSectionComponentProps {
  isActive: boolean;
  title: string;
  idTag: string;
  handleClick: (idTag: string) => void;
}

const TagMenuSectionComponent = ({
  title,
  isActive = false,
  handleClick,
  idTag,
}: ITagMenuSectionComponentProps) => {
  return (
    <div
      className={`tag__menu-section--component ${isActive && 'active'}`}
      onClick={() => handleClick(idTag)}
    >
      <div className="title">{title}</div>
    </div>
  );
};

export { TagMenuSectionComponent };
