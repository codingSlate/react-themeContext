import React from 'react';
import './style.css';
import Button from './Button';
import ThemeContext from './ThemeContext';

const App = () => {
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <div>
          <div className={theme}>
            <h1>Hello StackBlitz!</h1>
            <p>Start editing to see some magic happen :) {theme} theme</p>
          </div>
          <Button />
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

// import React, { Component } from 'react';
// class App extends Component {
//   static contextType = ThemeContext
//   render() {
//     const theme = this.context;
//     return (
//       <div>
//         <div className="light">
//           <h1>Hello StackBlitz!</h1>
//           <p>Start editing to see some magic happen :) {theme} theme</p>
//         </div>
//         <Button />
//       </div>
//     );
//   }
// }

export default App;
