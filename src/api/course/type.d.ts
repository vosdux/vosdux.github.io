type CourseResponse = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  rating: number;
  completedCount: number;
}

type CourseGetResponse = GetResponse<CourseResponse>;
