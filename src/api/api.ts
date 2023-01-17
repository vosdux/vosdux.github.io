import { login, singnUp, changePasswordRequest, changePassword, resendEmail } from './auth/index';

export const api = {
  auth: {
    login,
    singnUp,
    changePassword,
    changePasswordRequest,
    resendEmail,
  },
};
