import React, { Component } from 'react';
import ThemeContext from './ThemeContext';
import PropTypes from 'prop-types';

const Button = ({theme}) => {
  return <div className={`btn ${theme}`}>Switch Theme</div>;
};

Button.propTypes ={
  theme: PropTypes.oneOf(['light', 'dark'])
}

Button.defaultProps = {
  theme:'light'
}

// class Button extends Component {
  //   render() {
    //     console.log(this.context);
    //     return <div className="btn">Switch Theme</div>;
    //   }
    // }
    
    // Button.contextType = ThemeContext;
    
    
    export default Button;