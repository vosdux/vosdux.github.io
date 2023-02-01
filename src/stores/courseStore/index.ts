import { makeAutoObservable, runInAction } from 'mobx';
import { message } from 'antd';
import { FormCourseType } from '@pages/AdminCoursePage';
import { api } from '@api/api';
import { getError } from '../../utils/getError';

const { course: { getCourses, deleteCourse, updateCourses, createCourse } } = api;

class CourseStore {
  isLoading = false;
  courseData: CourseResponse[] = [];
  courseTotal = 0;

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
      throw error;
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  getCourse = async (page: number, limit: number) => {
    await this.apiMethod(async () => {
      const { data } = await getCourses({ params: { offset: (page - 1) * limit, limit } });
      this.courseData = data.rows;
      this.courseTotal = data.total;
    });
  };

  createCoruse = async (data: FormCourseType) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('price', data.price);
    formData.append('image', data.image[0].originFileObj);
    await this.apiMethod(async () => await createCourse(formData));
  };

  updateCourse = async (data: FormCourseType & { id: string }) => {
    const formData = new FormData();
    formData.append('id', data.id);
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('price', data.price);
    formData.append('image', data.image[0].originFileObj);
    await this.apiMethod(async () => await updateCourses(formData));
  };

  deleteCourse = async (id: string) => {
    await this.apiMethod(async () => await deleteCourse(id));
  };
}

export default new CourseStore();
