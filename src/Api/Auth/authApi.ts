import { ICoreResponse } from '../../types/core/Response/responseCoreType';
import { ILoginRequest } from '../../types/request/Login/loginType';
import { IRegisterRequest } from '../../types/request/Register/registerType';
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
  },

  registerOTP: async (data: IRegisterRequest) => {
    return axiosClient
      .post<ICoreResponse<number>>(`${API_ENDPOINT.REGISTER_OTP}`, data)
      .then((response) => response.data);
  },

  register: async (data: IRegisterRequest) => {
    return axiosClient
      .post<ICoreResponse<number>>(`${API_ENDPOINT.REGISTER}`, data)
      .then((response) => response.data);
  },
};

export default authApi;
