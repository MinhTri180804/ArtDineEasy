import DiscountTagComponent from '../../../../../components/DiscountTag';
import FeedbackAction from '../../../../../components/Store/partials/FeedbackAction';
import StarAction from '../../../../../components/Store/partials/StarAction';
import TagFoodCategory from '../../../../../components/TagFoodCategory';
import ButtonComponent from '../../../../../components/commons/Button';
import { IAttributeResponseList } from '../../../../../types/response/Store/storeType';
import './styles.scss';

interface IAboutStoreSectionProps {
  // Props here
  name: string;
  attributesTable: IAttributeResponseList[];
  description: string;
}

const mockTagsFood = [
  {
    id: 1,
    name: 'Cơm tấm',
  },
  {
    id: 2,
    name: 'Món Việt',
  },
  {
    id: 3,
    name: 'Đồ khô',
  },
  {
    id: 4,
    name: 'Đồ uống',
  },
];

const discountsMock = [
  {
    id: 1,
    text: 'Giảm giá 10%',
  },
  {
    id: 2,
    text: 'Giảm giá 20%',
  },
  {
    id: 3,
    text: 'Giảm giá 30%',
  },
  {
    id: 4,
    text: 'Giảm giá 40%',
  },
  {
    id: 5,
    text: 'Giảm giá 50%',
  },
  {
    id: 6,
    text: 'Giảm giá 60%',
  },
];

const AboutStoreSection = ({
  name,
  attributesTable,
  description,
}: IAboutStoreSectionProps) => {
  return (
    <div className="about__store-container">
      <section className="store__details-about">
        <div className="store__introduction">
          <div className="heading">
            <div className="name__store">
              <h2>{name}</h2>
            </div>

            <div className="actions">
              <ButtonComponent size="40" type="secondary" content="Yêu thích" />
            </div>
          </div>

          <div className="tag__food-categories">
            {mockTagsFood.map((tag, index) => (
              <TagFoodCategory key={`${index}-${tag.id}`} content={tag.name} />
            ))}
          </div>

          <div className="discounts">
            {discountsMock.map((discount, index) => (
              <DiscountTagComponent
                key={`${index}-${discount.id}`}
                textContent={discount.text}
                size="medium"
              />
            ))}
          </div>

          <div className="statistic">
            <StarAction value={'4.5'} />
            <FeedbackAction value={231} />
          </div>

          <div className="actions">
            <div className="actions__contact-now">
              <ButtonComponent
                size="40"
                type="primary"
                content="Liên hệ ngay"
              />
            </div>

            <div className="actions__feedback">
              <ButtonComponent size="40" type="secondary" content="Đánh giá" />
            </div>
          </div>
        </div>

        <div className="store__information">
          <div className="heading">
            <h3>Thông tin cửa hàng</h3>
          </div>

          {attributesTable.length > 0 && (
            <table className="information__table">
              <tbody>
                {attributesTable.map((attribute, index) => (
                  <tr key={`${index}-${index}`}>
                    <td className="name">{attribute.atrributeName}</td>
                    <td className="value">{attribute.attributeValue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          <div className="store__description">
            <p>{description}</p>
          </div>
        </div>
      </section>
      <section className="store__details-feedbacks">Chưa phát triển</section>
    </div>
  );
};

export { AboutStoreSection };
