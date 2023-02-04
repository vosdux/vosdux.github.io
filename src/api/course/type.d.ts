type CourseResponse = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  rating: number;
  percent: number;
  purchased: boolean;
};

type CourseGetResponse = GetResponse<CourseResponse>;

type CourseInfoResponse = {
  name: string;
  description: string;
  lessons: {
    name: string;
    completed: boolean;
  }[];
  rating: number;
  price: string;
  completedCount: number;
  purchasedCount: number;
};
