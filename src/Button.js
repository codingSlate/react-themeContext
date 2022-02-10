import React, { Component, useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContextConsumer } from './ThemeContext';

const Button = () => {
  return (
    <ThemeContextConsumer>
      {({ theme,toggleTheme }) => (
        <div className={theme.mode} onClick={toggleTheme}>
          Switch Theme {theme.mode} 
        </div>
      )}
    </ThemeContextConsumer>
  );
};

Button.propTypes = {
  mode: PropTypes.oneOf(['light', 'dark']),
};

Button.defaultProps = {
  mode: 'light',
};

// class Button extends Component {
//   render() {
//     console.log(this.context);
//     return <div className="btn">Switch Theme</div>;
//   }
// }

// Button.contextType = ThemeContext;

export default Button;
