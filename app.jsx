import React from 'react';


// this is the main component where in everything will be wrapped inside
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data : []		
		}
		this.setStateHandler = this.setStateHandler.bind(this);
	};

	setStateHandler(){
		var item = "setState ..."
		var myArray = this.state.data;
		myArray.push(item)
		this.setState({data: myArray})
	};


	render(){
		return(
			<div>
				<button onClick={this.setStateHandler}> SET STATE </button>
				<h4>State Array: {this.state.data} </h4>
			</div>
		);
	}
}
export default App;
