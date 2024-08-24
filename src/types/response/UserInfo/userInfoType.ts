export interface IUserInfoResponse {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  dob: string;
  roles: IRoles[];
}

interface IRoles {
  name: string;
  description: string;
  permissions: IPermissions[];
}

interface IPermissions {
  name: string;
  description: string;
}
