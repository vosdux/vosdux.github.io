import { login, singnUp, changePasswordRequest, resendEmail, checkAuthenticated } from './auth/index';

export const api = {
  auth: {
    login,
    singnUp,
    changePasswordRequest,
    resendEmail,
    checkAuthenticated,
  },
};
