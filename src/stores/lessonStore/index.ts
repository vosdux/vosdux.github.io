import { makeAutoObservable, runInAction } from 'mobx';
import { message } from 'antd';
import { api } from '@api/api';
import { getError } from '../../utils/getError';

const {
  lesson: { createLesson, updateLesson, deleteLesson, getLessons },
} = api;

class LessonStore {
  isLoading = false;
  lessonData: LessonInstance[] = [];
  lessonTotal = 0;

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

  getLessons = async (page: number, limit: number) => {
    await this.apiMethod(async () => {
      const { data } = await getLessons({ params: { offset: (page - 1) * limit, limit } });
      this.lessonData = data.rows;
      this.lessonTotal = data.total;
    });
  };

  createLesson = async (data: LessonBodyCreate) => {
    await this.apiMethod(async () => await createLesson(data));
  };

  upadateLesson = async (data: LessonBodyUpdate) => {
    await this.apiMethod(async () => await updateLesson(data));
  };

  deleteLesson = async (id: string) => await this.apiMethod(async () => await deleteLesson(id));
}

export default new LessonStore();
