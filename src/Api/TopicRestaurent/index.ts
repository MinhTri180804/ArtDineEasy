import { API_ENDPOINT } from '../../utils/constant';
import axiosClient from '../axiosClient';

const topicRestaurantApi = {
  getAll: () => axiosClient.get(API_ENDPOINT.TOPIC_RESTAURANT),
};

export default topicRestaurantApi;
