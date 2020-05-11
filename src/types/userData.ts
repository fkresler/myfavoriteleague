export type AsyncUserData<T> = {
  hasLoaded: boolean;
  isLoading: boolean;
  isError: boolean;
  data: T[];
};
