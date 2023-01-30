import { makeAutoObservable, runInAction } from 'mobx';
import { message } from 'antd';
import { FormCourseType } from '@pages/AdminCoursePage';
import { api } from '@api/api';
import { getError } from '../../utils/getError';

class AdminStore {
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  apiMethod = async (cb: () => Promise<unknown>) => {
    try {
      runInAction(() => {
        this.isLoading = true;
      });
      await cb();
    } catch (error) {
      message.error(getError(error));
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  createCoruse = async (data: FormCourseType) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('price', data.price);
    formData.append('avatar', data.avatar[0].originFileObj);
    this.apiMethod(async () => await api.admin.createCourse(formData));
  };

  updateCourse = async (data: FormCourseType & { id: string }) => {
    const formData = new FormData();
    formData.append('id', data.id);
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('price', data.price);
    formData.append('avatar', data.avatar[0].originFileObj);
    this.apiMethod(async () => await api.admin.updateCourses(formData));
  };

  createLesson = async () => {
    try {
      console.log('create lesson');
    } catch (error) {
      message.error(error);
    }
  };
}

export default new AdminStore();
