import React from 'react';
import ReactDOM from 'react-dom';

// componentDidmount()
class ex1 extends React.Component{
  constructor(props){
    super(props);
    this.state = {favoriteColor:"Red"};
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({favoriteColor:"Purple"})
    },10000)
  }
  render(){
    return(
      <h1>Wait until the color change: {this.state.favoriteColor}</h1>
    );
  }
}

export default ex1;