type AuthorizationBody = {
  username: string;
  password: string;
};

type AuthorizationResponse = {
  user: {
    email: string;
    id: string;
    role: 'USER' | 'ADMIN';
    isActivated: boolean;
  };
  accessToken: string;
  refreshToken: string;
};

type SignUpBody = {
  email: string;
  password: string;
  secondPassword: string;
};

type changePasswordBody = {
  password: string;
  secondPassword: string;
  chnageLink: string;
};
