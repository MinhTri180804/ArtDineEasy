import { ICoreResponse } from '../../types/core/Response/responseCoreType';
import { ICategoryOfStore } from '../../types/response/CategoryOfStore/categoryOfStoreType';
import axiosClient from '../axiosClient';

const categoryOfStoreApi = {
  getAll: async () => {
    return axiosClient.get<ICoreResponse<ICategoryOfStore[]>>(
      '/CategoryOfFoodStore'
    );
  },
};

export default categoryOfStoreApi;
