import { login, singnUp, changePasswordRequest, changePassword } from './auth/index';

export const api = {
  auth: {
    login,
    singnUp,
    changePassword,
    changePasswordRequest,
  },
};
