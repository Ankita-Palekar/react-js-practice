import React from 'react';
import ReactDom from 'react-dom';

// this is the main component where in everything will be wrapped inside
class App extends React.Component {
	constructor(props) {
		super(props);
		this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
	};

	findDomNodeHandler(){
		var myDiv = document.getElementById('myDiv');
		ReactDom.findDOMNode(myDiv).style.color = 'green';
	}


	render(){
		return(
			<div>
				<button onClick={this.findDomNodeHandler}> Find Dome Node </button>
				<div id="myDiv">Node</div>
			</div>
		);
	}
}
export default App;
