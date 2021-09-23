import React from 'react';
import _ from 'lodash';

const useScroll = () => {
  const [scrollY, SetScrollY] = React.useState(0);

  const handleScroll = () => {
    SetScrollY(window.scrollY);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', _.throttle(handleScroll, 200));
  }, []);

  return {
    scrollY,
  };
};

export default useScroll;
