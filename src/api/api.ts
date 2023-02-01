import { login, singnUp, changePasswordRequest, resendEmail, checkAuthenticated, changePassword, logout } from './auth/index';
import { createCourse, updateCourses, getCourses, deleteCourse } from './course';
import { getLessons, createLesson, updateLesson, deleteLesson } from './lessons';

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
  course: {
    createCourse,
    updateCourses,
    getCourses,
    deleteCourse,
  },
  lesson: {
    getLessons,
    createLesson,
    updateLesson,
    deleteLesson,
  },
};
