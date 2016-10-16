import React from 'react';


// this is the main component where in everything will be wrapped inside
class App extends React.Component {
	constructor(){
 		super();
 		this.state = {
 			data: [
 				{
 					"id": 1,
 					"name": "Ankita",
 					"age": "24"
 				},
 				{
 					"id": 2,
 					"name": "Apurva",
 					"age": "19"
 				},
 				{
 					"id": 3,
 					"name": "Aditi",
 					"age": "17"
 				}
 			]
 		};
 	}
	render() {
 		return (
    	<div>
      	<Header/>
       	<table>
          <tbody>
            {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
          </tbody>
       	</table>
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
