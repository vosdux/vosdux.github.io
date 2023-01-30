import { login, singnUp, changePasswordRequest, resendEmail, checkAuthenticated, changePassword, logout } from './auth/index';
import { createCourse, createLesson, updateCourses } from './admin';

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
  admin: {
    createCourse,
    createLesson,
    updateCourses,
  },
};
