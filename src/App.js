import React from 'react';

class App extends React.Component{
  render(){
    return(
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type='text' onChange={()=> {console.log("click")}} />
      </React.Fragment>
    )
  }
}

export default App;
