import './styles.scss';
import MockLoading from '../../../../../components/skeletons/MockLoading';
import useQueryTopicRestaurant from '../../../../../hooks/queries/useQueryTopicRestaurant';
import StoreSwiperSection from '../StoreSwiperSection';

const TopicStoreSection = () => {
  const { data, isLoading, error } = useQueryTopicRestaurant();

  if (isLoading) {
    return (
      <div className="mock--loading">
        <MockLoading countProduct={4} />
        <MockLoading countProduct={4} />
      </div>
    );
  }

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      {data?.result?.map((topic, index) => (
        <section
          key={index}
          className="store__swiper__section container section--margin"
        >
          <StoreSwiperSection
            title={topic.name}
            dataStores={topic.topicFoodStores}
          />
        </section>
      ))}
    </>
  );
};

export { TopicStoreSection };
