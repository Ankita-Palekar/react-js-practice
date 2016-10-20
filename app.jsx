import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

class App extends React.Component {
	render() {
	  return (
	    <div>
				<ul>
					<li>this is router</li>
				  <Home></Home>
				  <About></About>
				  <Contact></Contact>
				</ul>
         
      </div>
	  );
	}

}	
export default App;

export class Home extends React.Component {
  render() {
    return (
      <div>
      	<a href="#">Home ...</a>
      </div>
    );
  }
}
 

export class About extends React.Component{
	render(){
		return (
			<div>
				<a href="#">About</a>
			</div>
		);
	}
}


export class Contact extends React.Component {
  render() {
    return (
			<div>
			  <a href="#">Contact...</a>
			</div>
    )
  }
}

 

