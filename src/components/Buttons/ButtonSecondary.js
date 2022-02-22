import React, { useRef, useEffect } from 'react';

const ButtonSecondary = ({ ...props }) => {
  const { children, addClasses, removeClasses } = props;

  const button_secondary = useRef();

  useEffect(() => {
    if (removeClasses)
      removeClasses.map((x) => button_secondary.current.classList.remove(x));
    if (addClasses) addClasses.map((x) => button_secondary.current.classList.add(x));
  }, [button_secondary, addClasses, removeClasses]);

  return (
    <button
      ref={button_secondary}
      className="bg-white-full py-2.5 px-10 rounded-full border-solid border
       text-center text-medium font-display font-normal text-pink-100">
      {children}
    </button>
  );
};

export default ButtonSecondary;
