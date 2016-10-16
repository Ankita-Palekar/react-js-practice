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
    		<h3>Array: {this.props.propArray}</h3>
    		<h3>Bool: {this.props.propBool}</h3>
    		<h3>Func: {this.props.propFunc(3)}</h3>
        <h3>Number: {this.props.propNumber}</h3>
        <h3>String: {this.props.propString}</h3>
        <h3>Object: {this.props.propObject.key1}</h3>
        <h3>Object: {this.props.propObject.key2}</h3>
        <h3>Object: {this.props.propObject.key3}</h3>
    	</div>
 		);
	}
	
}


App.propTypes = {
	propArray: React.PropTypes.array.isRequired,
	propBool: React.PropTypes.bool.isRequired,
	propFunc: React.PropTypes.func,
	propNumber: React.PropTypes.number,
	propString: React.PropTypes.string,
	propObject: React.PropTypes.object
}

App.defaultProps = {
	propArray : [1, 2, 3, 4, 5, 6],
	propBool : true,
	propFunc : function(e){return e},
	propNumber : 1,
	propString : "String Value ...",
	propObject: {
		key1 : "key1",
		key2 : "key2",
		key3 : "key3",
		key4 : "key4"
	}
}






export default App;
