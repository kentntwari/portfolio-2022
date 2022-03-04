import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ButtonPrimary = ({ ...props }) => {
  const { children, modifyClasses, url } = props;

  const button_primary = useRef();

  useEffect(() => {
    let mounted = true;

    if (mounted && modifyClasses) {
      for (const [key, value] of Object.entries(modifyClasses)) {
        if (key === 'remove' && typeof value === 'string')
          button_primary.current.classList.remove(value);

        if (key === 'remove' && typeof value === 'object')
          value.map((x) => button_primary.current.classList.remove(x));

        if (key === 'add' && typeof value === 'string')
          button_primary.current.classList.add(value);

        if (key === 'add' && typeof value === 'object')
          value.map((x) => button_primary.current.classList.add(x));
      }
    }

    return () => (mounted = false);
  }, [modifyClasses]);

  return (
    <Link
      to={url}
      ref={button_primary}
      className="bg-pink-100 py-5 px-[30px] rounded-full text-center text-medium
     font-display font-normal capitalize text-white-full">
      {children}
    </Link>
  );
};

export default ButtonPrimary;
