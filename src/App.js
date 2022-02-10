import React from 'react';
import './style.css';
import Button from './Button';
import { ThemeContextConsumer } from './ThemeContext';
import Comp1 from './Comp1';

const App = () => {
  return (
    <ThemeContextConsumer>
      {(theme) => (
        <div>
          <Comp1 theme={theme} />
          <Button theme={'dark'} />
        </div>
      )}
    </ThemeContextConsumer>
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
