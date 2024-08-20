import './styles.scss';
interface ITitleSectionProps {
  titleNormal: string;
  titleTarget?: string;
}

const TitleSection = ({ titleNormal, titleTarget }: ITitleSectionProps) => {
  return (
    <div className="title__section-component">
      <h2 className="title">
        {titleNormal} <span>{titleTarget ?? ''}</span>
      </h2>
    </div>
  );
};

export { TitleSection };
