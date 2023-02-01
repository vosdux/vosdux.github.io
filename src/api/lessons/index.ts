import { AxiosRequestConfig } from 'axios';
import { makeRequest } from '../makeRequest';

export const getLessons = async (config?: AxiosRequestConfig) => await makeRequest.get<LessonGetResponse>('/lessons', config);
export const createLesson = async (data: LessonBodyCreate) => await makeRequest.post<LessonInstance>('/lessons', data);
export const updateLesson = async (data: LessonBodyUpdate) => await makeRequest.put<LessonInstance>('/lessons', data);
export const deleteLesson = async (id: string) => await makeRequest.delete(`/lessons/${id}`);
