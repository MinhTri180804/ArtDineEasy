import { ICoreResponse } from '../../types/core/Response/responseCoreType';
import { ITopicRestaurant } from '../../types/response/Topic/topicType';
import { API_ENDPOINT } from '../../utils/constant';
import axiosClient from '../axiosClient';

const topicRestaurantApi = {
  getAll: () =>
    axiosClient.get<ICoreResponse<ITopicRestaurant[]>>(
      API_ENDPOINT.TOPIC_RESTAURANT
    ).then(response => response),
};

export default topicRestaurantApi;
