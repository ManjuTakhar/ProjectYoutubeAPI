//import React from 'react';
import React,{ Component } from 'react';//ES6 Syntax

//or Component=React.Component

/*const SearchBar = () =>{
  return <input />;
};// functional component
*/

class SearchBar extends Component {//or extends React.Component

  constructor(props){
    super(props);

    this.state={term : ''};
  }

  render(){
    //return <input  onChange={this.onInputChange} />;

    //return <input onChange={(event) => console.log(event.target.value) }  />;
    return(
    <div>
     <input
     value={this.state.term}
     onChange={event => this.setState({term: event.target.value})} />
    </div>
  );
  }
//  Value of the input: {this.state.term}//to print what is to be typed.
/*  onInputChange(event) {
    console.log(event.target.value);
  } Old function
*/
}
export default SearchBar;
