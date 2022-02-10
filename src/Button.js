import React, { Component, useContext } from 'react';
import PropTypes from 'prop-types';
import {ThemeContextConsumer} from './ThemeContext'

const Button = ({ theme, toggleTheme }) => {
  const ctx = useContext(ThemeContextConsumer)
  console.log('Button ', toggleTheme, theme);
  return (
    <div className={`btn ${ctx.theme}`} onClick={ctx.toggleTheme}>
      Switch Theme
    </div>
  );
};

Button.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']),
};

Button.defaultProps = {
  theme: 'light',
};

// class Button extends Component {
//   render() {
//     console.log(this.context);
//     return <div className="btn">Switch Theme</div>;
//   }
// }

// Button.contextType = ThemeContext;

export default Button;
