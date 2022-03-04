import React from 'react';
import { useParams } from 'react-router-dom';

const Website = () => {
  let params = useParams();
  return <div>{console.log(params)}</div>;
};

export default Website;
