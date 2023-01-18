import { login, singnUp, changePasswordRequest, resendEmail, checkAuthenticated, changePassword } from './auth/index';

export const api = {
  auth: {
    login,
    singnUp,
    changePassword,
    changePasswordRequest,
    resendEmail,
    checkAuthenticated,
  },
};
