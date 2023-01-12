import { message } from 'antd';
import { makeAutoObservable, runInAction } from 'mobx';
import { api } from '@api/api';
import { getError } from '@utils/getError';

class AuthStore {
  isLoading = false;
  isAuthenticated = false;
  isActivated = false;
  email = '';
  role: 'USER' | 'ADMIN' | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  login = async (data: AuthorizationBody, onSuccess: () => void) => {
    try {
      runInAction(() => {
        this.isLoading = true;
      });

      const { data: { accessToken, user } } = await api.auth.login(data);
      localStorage.setItem('token', accessToken);
      runInAction(() => {
        this.isAuthenticated = true;
        this.isActivated = user.isActivated;
        this.role = user.role;
        this.email = user.email;
      });
      onSuccess();
    } catch (error) {
      message.error(getError(error));
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  singnUp = async (data: SignUpBody, onSuccess: () => void) => {
    try {
      runInAction(() => {
        this.isLoading = true;
      });
      const { data: { accessToken, user } } = await api.auth.singnUp(data);
      localStorage.setItem('token', accessToken);
      runInAction(() => {
        this.isAuthenticated = true;
        this.isActivated = user.isActivated;
        this.role = user.role;
        this.email = user.email;
      });
      onSuccess();
    } catch (error) {
      message.error(getError(error));
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  changePasswordRequest = async (data: СhangePasswordRequest) => {
    try {
      runInAction(() => {
        this.isLoading = true;
      });
      const res = await api.auth.changePasswordRequest(data);
      res.status;
      message.success({ content: 'Сообщение отправлино к вам на почту', duration: 5 });
    } catch (error) {
      message.error(getError(error));
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };
}

export const authStore = new AuthStore();
