import React, { useRef, useEffect } from 'react';

const useClickOutside = (callback: () => void) => {
  const insideElementRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (insideElementRef.current && !insideElementRef.current.contains(event.target as Node)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [insideElementRef]);
  return insideElementRef;
};

export default useClickOutside;
