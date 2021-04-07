import React from 'react';

class ex2 extends React.Component {
    constructor(props) { 
      super(props);
      this.state = {favoriteColor:"Red"};

    }
    shouldComponentUpdate(){
      return true;
    }
    changeColor = () => {
    this.setState({favoriteColor: "Purple"});
  }
    render(){
      let deleteThis;
      if(this.state.show)
        deleteThis = <unmount />
          return(
            <div>
              <h1></h1>
            <h1>Click the button and the color change: {this.state.favoriteColor}</h1>
            <button type="button" onClick= {this.changeColor}>Change color</button>
            </div>
          );
    }
}
export default ex2;