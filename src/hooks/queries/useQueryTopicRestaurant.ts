import { useQuery } from '@tanstack/react-query';
import topicRestaurantApi from '../../Api/TopicRestaurent';
import { QUERY_KEY } from '../../utils/constant';

const keys: string[] = [QUERY_KEY.TOPIC_RESTAURANT];

const useQueryTopicRestaurant = () => {
  return useQuery({
    queryKey: keys,
    queryFn: async () => {
      const res = await topicRestaurantApi.getAll();
      return res.data;
    },
  });
};

export default useQueryTopicRestaurant;
