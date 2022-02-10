import React from 'react';
import Button from './Button';

const Comp1 = ({ theme, toggleTheme }) => {
  return (
    <>
      <div className={theme}>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :) {theme} theme</p>
      </div>
      <Button theme={theme} />
      {/* <Button /> */}
    </>
  );
};
export default Comp1;
