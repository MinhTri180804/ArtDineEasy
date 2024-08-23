import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../../utils/constant';
import topicRestaurantApi from '../../Api/TopicRestaurent';

const keys: string[] = [QUERY_KEY.TOPIC_RESTAURANT];

const useQueryTopicRestaurant = () => {
  return useQuery({
    queryKey: keys,
    queryFn: () => topicRestaurantApi.getAll(),
  });
};

export default useQueryTopicRestaurant;
