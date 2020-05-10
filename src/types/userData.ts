export type AsyncUserData<T> = {
  isLoading: boolean;
  isError: boolean;
  data: T[];
};
