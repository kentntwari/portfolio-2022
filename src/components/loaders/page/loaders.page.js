import React from 'react';

export const LoadPage = () => {
  return (
    <div className="w-full h-[50vh] flex justify-center gap-20">
      <div className="flex items-center justify-center space-x-2 animate-ping">
        <div className="w-10 h-10 bg-black-full opacity-10 rounded-full"></div>
      </div>
      <div className="flex items-center justify-center space-x-2 animate-ping">
        <div className="w-10 h-10 bg-black-full opacity-25 rounded-full"></div>
      </div>
      <div className="flex items-center justify-center space-x-2 animate-ping">
        <div className="w-10 h-10 bg-black-full opacity-50 rounded-full"></div>
      </div>
      <div className="flex items-center justify-center space-x-2 animate-ping">
        <div className="w-10 h-10 bg-black-full opacity-75 rounded-full"></div>
      </div>
      <div className="flex items-center justify-center space-x-2 animate-ping">
        <div className="w-10 h-10 bg-black-full opacity-100 rounded-full"></div>
      </div>
    </div>
  );
};
