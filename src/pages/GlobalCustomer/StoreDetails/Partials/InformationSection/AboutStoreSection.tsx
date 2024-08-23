import DiscountTagComponent from '../../../../../components/DiscountTag';
import FeedbackAction from '../../../../../components/Store/partials/FeedbackAction';
import StarAction from '../../../../../components/Store/partials/StarAction';
import TagFoodCategory from '../../../../../components/TagFoodCategory';
import ButtonComponent from '../../../../../components/commons/Button';
import './styles.scss';

const AboutStoreSection = () => {
  return (
    <div className="about__store-container">
      <section className="store__details-about">
        <div className="store__introduction">
          <div className="heading">
            <div className="name__store">
              <h2>TÊN CỬA HÀNG</h2>
            </div>

            <div className="actions">
              <ButtonComponent size="40" type="secondary" content="Yêu thích" />
            </div>
          </div>

          <div className="tag__food-categories">
            {Array.from({ length: 3 }).map((_, index) => (
              <TagFoodCategory key={index} content={`MON_${index + 2}`} />
            ))}
          </div>

          <div className="discounts">
            {Array.from({ length: 6 }).map((_, index) => (
              <DiscountTagComponent
                key={index}
                textContent={`GIAM_${index + 1}`}
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

          <div className="content">
            <table>
              <tbody>
                <tr>
                  <td>Địa chỉ:</td>
                  <td>Địa chỉ cửa hàng</td>
                </tr>
                <tr>
                  <td>Số điện thoại:</td>
                  <td>0123456789</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>artdineease@gmail.com</td>
                </tr>
              </tbody>
            </table>

            <div className="store__description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                quod, quae, voluptatibus, autem facere dolorum quia nemo
                temporibus voluptas quibusdam quos. Quisquam, doloremque
                voluptates. Quisquam, doloremque voluptates.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="store__details-feedbacks"></section>
    </div>
  );
};

export { AboutStoreSection };
