import { login, singnUp, changePasswordRequest, resendEmail } from './auth/index';

export const api = {
  auth: {
    login,
    singnUp,
    changePasswordRequest,
    resendEmail,
  },
};
