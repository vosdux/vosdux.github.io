type LessonInstance = {
  id: string;
  name: string;
  video: string;
  text: string;
  homework: string;
  courseId: string;
  course: {
    courseName: string;
    courseId: string;
  }
}

type LessonGetResponse = GetResponse<LessonInstance>;


type LessonBodyCreate = Omit<LessonInstance, 'id' | 'course'>;
type LessonBodyUpdate = Omit<LessonInstance, 'course'>;

