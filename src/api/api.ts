import { login, singnUp, changePasswordRequest, resendEmail, checkAuthenticated, changePassword, logout } from './auth/index';

export const api = {
  auth: {
    login,
    logout,
    singnUp,
    changePassword,
    changePasswordRequest,
    resendEmail,
    checkAuthenticated,
  },
};
