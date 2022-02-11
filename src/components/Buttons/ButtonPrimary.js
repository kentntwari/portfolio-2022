import React from 'react';

const ButtonPrimary = ({ children }) => {
  return (
    <button
      className="bg-pink-100 py-5 px-10 rounded-full text-center text-medium
     font-display font-normal text-white-full">
      {children}
    </button>
  );
};

export default ButtonPrimary;
