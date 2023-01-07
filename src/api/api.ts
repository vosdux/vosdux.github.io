import { login, singnUp, changePassword } from './auth/index';

export const api = {
  auth: {
    login,
    singnUp,
    changePassword,
  },
};
