import React from 'react';

const usePrevious = <T extends unknown>(value: T): T => {
  const ref = React.useRef<T>();
  React.useEffect(() => {
    ref.current = value;
  });
  return ref.current as T;
};

export default usePrevious;
