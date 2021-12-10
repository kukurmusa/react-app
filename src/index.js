//import the react and reactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';



//create a react component

if (module.hot) {
    module.hot.accept();
  }

const App = () => {
    return <div>hi there, how is it going...? !</div>   
};

//take the react component and show it on the screen
ReactDOM.render(

    <App />,
    document.querySelector('#root')
);