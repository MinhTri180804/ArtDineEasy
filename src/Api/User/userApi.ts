import axiosClient from '../axiosClient';
import { API_ENDPOINT } from '../../utils/constant';
import { ICoreResponse } from '../../types/core/Response/responseCoreType';
import { IUserInfoResponse } from '../../types/response/UserInfo/userInfoType';
import { IAuthentication } from '../../types/localStorage/authentication';

const userApi = {
  getInfo: async () => {
    let authentication: IAuthentication = JSON.parse(
      localStorage.getItem('authentication' || '') || ''
    );
    const { token } = authentication;

    const res = await axiosClient.get<ICoreResponse<IUserInfoResponse>>(
      `${API_ENDPOINT.INFO}`,
      {
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  },

  
};

export default userApi;
