import React, { Component } from 'react';
import ThemeContext from './ThemeContext';

// const Button = () =>{
//     return(
//       <div className="btn" onClick={}>Dark</div>
//     )
// }

class Button extends Component {
  render() {
    console.log(this.context);
    return <div className="btn">Switch Theme</div>;
  }
}

Button.contextType = ThemeContext;

export default Button;
