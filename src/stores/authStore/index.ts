import { message } from 'antd';
import { makeAutoObservable, runInAction } from 'mobx';
import { isAxiosError } from 'axios';
import { api } from '@api/api';
import { getError } from '@utils/getError';
import { UNAUTHORIZED } from '@constants/httpCodes';

class AuthStore {
  isLoading = false;
  isAuthenticated = false;
  isActivated = false;
  isLogoutLoading = false;
  email = '';
  role: 'USER' | 'ADMIN' | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  login = async (data: AuthorizationBody) => {
    try {
      runInAction(() => {
        this.isLoading = true;
      });

      const {
        data: { accessToken, user },
      } = await api.auth.login(data);
      localStorage.setItem('token', accessToken);
      runInAction(() => {
        this.isAuthenticated = true;
        this.isActivated = user.isActivated;
        this.role = user.role;
        this.email = user.email;
      });
    } catch (error) {
      message.error(getError(error));
      throw error;
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
      const {
        data: { accessToken, user },
      } = await api.auth.singnUp(data);
      localStorage.setItem('token', accessToken);
      runInAction(() => {
        this.isAuthenticated = true;
        this.isActivated = user.isActivated;
        this.role = user.role;
        this.email = user.email;
      });
    } catch (error) {
      message.error(getError(error));
      throw error;
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
      await api.auth.changePasswordRequest(data);
      message.success({ content: 'Сообщение отправлино к вам на почту', duration: 5 });
    } catch (error) {
      message.error(getError(error));
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  resendEmail = async () => {
    try {
      runInAction(() => {
        this.isLoading = true;
      });
      await api.auth.resendEmail({ email: this.email });
      message.success('Письмо отравлено');
    } catch (error) {
      message.error(getError(error));
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  checkAuthenticated = async () => {
    try {
      runInAction(() => {
        this.isLoading = true;
      });

      const {
        data: { user, accessToken },
      } = await api.auth.checkAuthenticated({ withCredentials: true });
      localStorage.setItem('token', accessToken);
      runInAction(() => {
        this.isAuthenticated = true;
        this.isActivated = user.isActivated;
        this.role = user.role;
        this.email = user.email;
      });
    } catch (error) {
      if (isAxiosError(error) && error.response.status !== UNAUTHORIZED) {
        message.error(getError(error));
      }
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  changePassword = async (data: changePasswordBody) => {
    try {
      runInAction(() => {
        this.isLoading = true;
      });
      await api.auth.changePassword(data);
    } catch (error) {
      message.error(getError(error));
      throw error;
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  logout = async () => {
    try {
      runInAction(() => {
        this.isLogoutLoading = true;
      });
      await api.auth.logout();
      localStorage.removeItem('token');
      this.isActivated = false;
      this.isAuthenticated = false;
      this.email = '';
      this.role = null;
    } catch (error) {
      message.error(getError(error));
      throw error;
    } finally {
      runInAction(() => {
        runInAction(() => {
          this.isLogoutLoading = false;
        });
      });
    }
  };
}

export const authStore = new AuthStore();
