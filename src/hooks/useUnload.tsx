import React from 'react';

const useUnload = (fn: () => void) => {
  const handleBeforeUnload = () => {
    fn();
  };

  React.useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);
};

export default useUnload;
