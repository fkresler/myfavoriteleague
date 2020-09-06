export type AsyncUserData<T> = {
  hasLoaded: boolean;
  hasChanged?: boolean;
  isLoading: boolean;
  isError: boolean;
  data: T;
};
