import { ICoreResponse } from '../../types/core/Response/responseCoreType';
import { IStore } from '../../types/response/Store/storeType';
import { API_ENDPOINT } from '../../utils/constant';
import axiosClient from '../axiosClient';

const storeDetailsApi = {
  get: (id: string | number) => {
    return axiosClient.get<ICoreResponse<IStore>>(
      `/${API_ENDPOINT.STORE_DETAIL}/${id}`
    );
  },
};

export default storeDetailsApi;
