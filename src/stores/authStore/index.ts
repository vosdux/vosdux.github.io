import { message } from 'antd';
import { makeAutoObservable, runInAction } from 'mobx';
import { api } from '@api/api';

class AuthStore {
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  login = async (data: AuthorizationBody) => {
    try {
      runInAction(() => {
        this.isLoading = true;
      });

      const res = await api.auth.login(data);

      alert(res);
    } catch (error) {
      message.error('error');
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  singnUp = async (data: SignUpBody) => {
    try {
      runInAction(() => {
        this.isLoading = true;
      });

      const res = await api.auth.singnUp(data);

      alert(res);
    } catch (error) {
      message.error('error');
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };
}

export const authStore = new AuthStore();