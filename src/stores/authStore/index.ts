import { message } from 'antd';
import { makeAutoObservable, runInAction } from 'mobx';
import { api } from '@api/api';
import { getError } from '@utils/getError';

class AuthStore {
  isLoading = false;
  isAuthenticated = false;
  isActivated = false;
  role: 'USER' | 'ADMIN' | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  login = async (data: AuthorizationBody, onSuccess: () => void) => {
    try {
      runInAction(() => {
        this.isLoading = true;
      });

      const res = await api.auth.login(data);
      localStorage.setItem('token', res.data.accessToken);
      runInAction(() => {
        this.isAuthenticated = true;
        this.isActivated = res.data.user.isActivated;
        this.role = res.data.user.role;
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
      const res = await api.auth.singnUp(data);
      localStorage.setItem('token', res.data.accessToken);
      runInAction(() => {
        this.isAuthenticated = true;
        this.isActivated = res.data.user.isActivated;
        this.role = res.data.user.role;
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
