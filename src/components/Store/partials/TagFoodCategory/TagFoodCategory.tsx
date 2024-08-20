import './styles.scss';
interface ITagFoodCategoryProps {
  content: string;
  plus?: number;
}

const TagFoodCategory = ({ content, plus }: ITagFoodCategoryProps) => {
  if (plus) {
    return (
      <div className="tag__food-category plus">
        <div className="plus__content content">+ {plus}</div>
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
