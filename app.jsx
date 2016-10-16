import React from 'react';


// this is the main component where in everything will be wrapped inside
class App extends React.Component {
	constructor(props){
 		super(props);
 		this.state = {
 			header: "header from state",
 			"content": "This is my content"
 		}
 	};

 	// console.log(this.props);
	render() {
 		return (
    	<div>
      	<h1 key={this.props}>{this.props.headerProp}</h1>
      	<h2>{this.props.contentProp}</h2>
    	</div>
 		);
	}
	
}

class Header extends React.Component{
	render(){
		return(
			<div>
				<h1>Header</h1>
			</div>
		);
	}
}

class Content extends React.Component{
	render(){
		return(
			<div>
				<h2>Content</h2>
				<p>The content</p>
			</div>
		);
	}
}


class TableRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
      </tr>
    );
  }
}

export default App;
