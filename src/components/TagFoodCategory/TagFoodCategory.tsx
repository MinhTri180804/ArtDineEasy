import './styles.scss';
interface ITagFoodCategoryProps {
  content: string;
  plus?: number;
  size?: 'small' | 'medium' | 'large';
}

const TagFoodCategory = ({
  content,
  plus,
  size = 'small',
}: ITagFoodCategoryProps) => {
  if (plus) {
    return (
      <div className="tag__food-category plus">
        <div className={`plus__content content ${size}`}>+ {plus}</div>
      </div>
    );
  }

  return (
    <div className="tag__food-category category">
      <div className="tag__content content">{content}</div>
    </div>
  );
};

export { TagFoodCategory };
