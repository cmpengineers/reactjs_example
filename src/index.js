// import the react and react-dom 
import React from 'react';
import ReactDOM from 'react-dom';




// function getButtonText() {
//     return 'click on me xxx';
// }

// create react component
const App =  ()  => {

    const buttonText = { text: 'Click me' };
    const style = { backgroundColor: 'red' , color: 'white' };
    const labelText = 'Enter your name';

    return (
    <div>
     <label className="label" for="name" > {labelText} </label>
     <input id="name" type="text" />
        {/* <button style={{ backgroundColor: 'red', color: 'white' }}>  { buttonText.text } </button> */}
        <button style={style}>  { buttonText.text } </button>
    </div>
   );
};


// Take the react component and show it on the screen
ReactDOM.render(
  <App />, document.querySelector('#root'))



//   if (module.hot) {
//          module.hot.accept();
//    } 
