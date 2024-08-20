import { Link } from 'react-router-dom';
import './styles.scss';

interface IVertSectionProps {
  title: string;
  dataVert: {
    content: string;
    redirectLink?: string;
  }[];
}

const VertSection = ({ title, dataVert }: IVertSectionProps) => {
  return (
    <>
      <div className="vert__container">
        <div className="title">{title}</div>

        <ul className="list__content">
          {dataVert.map((item, index) => (
            <li className="list__content-item" key={index}>
              <Link to={item.redirectLink || '#'}>{item.content}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export { VertSection };
