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
            {Array.from({ length: 3 }).map((_, index) => (
              <TagFoodCategory
                size="medium"
                key={index}
                content={`MON_${index + 2}`}
              />
            ))}
          </div>

          <div className="discounts">
            {Array.from({ length: 6 }).map((_, index) => (
              <DiscountTagComponent
                key={index}
                textContent={`GIAM_${index + 1}`}
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
                    <td>{attribute.atrributeName}</td>
                    <td>{attribute.attributeValue}</td>
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
      <section className="store__details-feedbacks"></section>
    </div>
  );
};

export { AboutStoreSection };
