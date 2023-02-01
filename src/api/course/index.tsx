import { AxiosRequestConfig } from 'axios';
import { makeRequest } from '../makeRequest';

export const getCourses = async (config?: AxiosRequestConfig) =>
  await makeRequest.get<CourseGetResponse>('/courses', config);

export const updateCourses = async (body: FormData) => await makeRequest.put<CourseResponse>('/courses', body);

export const createCourse = async (body: FormData) => await makeRequest.post<CourseResponse>('/courses', body);

export const deleteCourse = async (id: string) => await makeRequest.delete(`/courses/${id}`);
