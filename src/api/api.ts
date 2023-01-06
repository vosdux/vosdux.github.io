import { login, singnUp, changePasswordRequest } from './auth/index';

export const api = {
  auth: {
    login,
    singnUp,
    changePasswordRequest,
  },
};
