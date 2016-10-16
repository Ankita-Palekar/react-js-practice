import React from 'react';

class App extends React.Component {
  render() {
   	var i = 1;
  	var myStyle = {
  		fontSize: 100,
  		color: '#cccccc'
  	}

    return (
       <div>
          <h1 style = {myStyle}>This is just a test</h1>
          <p>You nuts</p>
          <con>This is my attributes</con>
          <p> {1==1? 'hi' : 'hello'}</p>
        {/* this is my comment */}
       </div>
    );
  }
}

export default App;
