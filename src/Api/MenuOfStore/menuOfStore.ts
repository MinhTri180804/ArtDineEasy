import { ICoreResponse } from '../../types/core/Response/responseCoreType';
import { IMenuOfStore } from '../../types/response/MenuOfStore/MenuOfStore';
import axiosClient from '../axiosClient';

const menuOfStoreApi = {
  getById: async (idStore: string | number) => {
    return axiosClient
      .get<ICoreResponse<IMenuOfStore[]>>(
        `/sections/Foodstore?foodstoreId=${idStore}`
      )
      .then((response) => response.data);
  },
};

export default menuOfStoreApi;
