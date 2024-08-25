import { ICoreResponse } from '../../types/core/Response/responseCoreType';
import { ILoginRequest } from '../../types/request/Login/loginType';
import { ILoginResponse } from '../../types/response/Login/loginType';
import { API_ENDPOINT } from '../../utils/constant';
import axiosClient from '../axiosClient';

const authApi = {
  login: async ({ email, password }: ILoginRequest) => {
    return axiosClient
      .post<ICoreResponse<ILoginResponse>>(`${API_ENDPOINT.LOGIN}`, {
        email,
        password,
      })
      .then((response) => response.data);
  },

  logout: async (token: string) => {
    return axiosClient
      .post<ICoreResponse<ILoginResponse>>(`${API_ENDPOINT.LOGOUT}`, {
        token,
      })
      .then((response) => response.data);
  }
};

export default authApi;
