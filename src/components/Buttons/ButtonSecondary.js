import React from 'react';

const ButtonSecondary = ({ children }) => {
  return (
    <button
      className="bg-white-full py-2.5 px-10 rounded-full border-solid border
       text-center text-medium font-display font-normal text-pink-100">
      {children}
    </button>
  );
};

export default ButtonSecondary;
