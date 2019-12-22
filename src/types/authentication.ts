export interface SignInData {
  email: string;
  password: string;
  error?: {
    message: string;
  };
}

export interface SignUpData {
  username?: string;
  email: string;
  password: string;
  passwordRepeat: string;
  error?: {
    message: string;
  };
}
