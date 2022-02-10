import React from 'react';
import Button from './Button';

const Comp1 = ({ theme }) => {
  return (
    <>
      <div className={theme.mode}>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :) {theme.mode} theme</p>
      </div>
      <Button />
      <Button />
    </>
  );
};
export default Comp1;
