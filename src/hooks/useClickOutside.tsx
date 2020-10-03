import React from 'react';

const useClickOutside = (callback: () => void) => {
  const insideElementRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (insideElementRef.current && !insideElementRef.current.contains(event.target as Node)) {
        callback();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback, insideElementRef]);

  return insideElementRef;
};

export default useClickOutside;
