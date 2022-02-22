import React, { useRef, useEffect } from 'react';

const ButtonPrimary = ({ children, addClasses = null, removeClasses = null }) => {
  const button_primary = useRef();

  useEffect(() => {
    if (removeClasses !== null)
      removeClasses.map((x) => button_primary.current.classList.remove(x));
    if (addClasses !== null)
      addClasses.map((x) => button_primary.current.classList.add(x));
  }, [button_primary, addClasses, removeClasses]);

  return (
    <button
      ref={button_primary}
      className="bg-pink-100 py-5 px-10 rounded-full text-center text-medium
     font-display font-normal text-white-full">
      {children}
    </button>
  );
};

export default ButtonPrimary;
