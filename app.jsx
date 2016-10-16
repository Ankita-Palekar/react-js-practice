import React from 'react';

class App extends React.Component {
   render() {
   	var i = 1;

      return (
         <div>
            <h1>This is just a test</h1>
            <p>You nuts</p>
            <con>This is my attributes</con>
            <p> {1==1? 'hi' : 'hello'}</p>
         </div>
      );
   }
}

export default App;
