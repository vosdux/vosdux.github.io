import { AxiosRequestConfig } from 'axios';
import { makeRequest } from '../makeRequest';

export const login = async (data: AuthorizationBody, config?: AxiosRequestConfig) => {
  try {
    return await makeRequest.post<AuthorizationResponse>('/login', data, config);
  } catch (error) {
    throw error;
  }
};

export const singnUp = async (data: SignUpBody, config?: AxiosRequestConfig) => {
  try {
    return await makeRequest.post<AuthorizationResponse>('/registration', data, config);
  } catch (error) {
    throw error;
  }
};

export const changePasswordRequest = async (data: СhangePasswordRequest, config?: AxiosRequestConfig) => {
  try {
    return await makeRequest.post('/change-password-request', data, config);
  } catch (error) {
    throw error;
  }
};

export const changePassword = async (data: changePasswordBody, config?: AxiosRequestConfig) => {
  try {
    return await makeRequest.post('/change-password', data, config);
  } catch (error) {
    throw error;
  }
};

export const resendEmail = async (data: { email: string }, config?: AxiosRequestConfig) => {
  try {
    return await makeRequest.post('/resend', data, config);
  } catch (error) {
    throw error;
  }
};

export const checkAuthenticated = async (config?: AxiosRequestConfig) => {
  try {
    return await makeRequest.post<AuthorizationResponse>('/check', {}, config);
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  try {
    return await makeRequest.post('/logout');
  } catch (error) {
    throw error;
  }
};