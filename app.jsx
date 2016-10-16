import React from 'react';


// this is the main component where in everything will be wrapped inside
class App extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			header : "header from props...",
			"content" : "content from props"
		}
	};

	render() {
 		return (
    	<div>
      	<Header headerProp={this.state.header} />
      	<Content contentProp={this.state.content}/>
    	</div>
 		);
	}
	
}

	App.defaultProps = {
 		headerProp: "Header from props...",
 		contentProp:"Content from props..."
	}

class Header extends React.Component{
	render(){
		return(
			<div>
				<h1>{this.props.headerProp}</h1>
			</div>
		);
	}
}

class Content extends React.Component{
	render(){
		return(
			<div>
				<h1>{this.props.contentProp}</h1>
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
