import { makeRequest } from '../makeRequest';

export const updateCourses = async (body: FormData) => {
  return await makeRequest.put<CourseResponse>('/courses', body);
};

export const createCourse = async (body: FormData) => {
  return await makeRequest.post<CourseResponse>('/courses', body);
};

export const createLesson = async () => {
  return await makeRequest.post('lessons');
};
