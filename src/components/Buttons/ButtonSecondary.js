import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ButtonSecondary = ({ ...props }) => {
  const { children, modifyClasses, url } = props;

  const button_secondary = useRef();

  useEffect(() => {
    let mounted = true;

    if (mounted && modifyClasses) {
      for (const [key, value] of Object.entries(modifyClasses)) {
        if (key === 'remove' && typeof value === 'string')
          button_secondary.current.classList.remove(value);

        if (key === 'remove' && typeof value === 'object')
          value.map((x) => button_secondary.current.classList.remove(x));

        if (key === 'add' && typeof value === 'string')
          button_secondary.current.classList.add(value);

        if (key === 'add' && typeof value === 'object')
          value.map((x) => button_secondary.current.classList.add(x));
      }
    }

    return () => (mounted = false);
  }, [modifyClasses]);

  return (
    <Link
      to={url}
      ref={button_secondary}
      className="bg-white-full py-2.5 px-10 rounded-full border-solid border
       text-center text-medium font-display font-normal capitalize text-pink-100">
      {children}
    </Link>
  );
};

export default ButtonSecondary;
