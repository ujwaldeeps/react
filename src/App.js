import React,{Component} from 'react';


class App extends Component {

    constructor(props){
     super(props);
     this.state = {firstNumber: null,secondNumber:null,result:null};
    }

    summ(){
        window.alert("hello there");
    }

  render() {
    return (
        <div>
            <input type="number" max-width="50px" onChange={this.onChange}></input><br />
            <input type="number" max-width="50px" onChange={this.onChange}></input><br />
            <button onClick={this.summ} id="check">click me</button>
        </div>);
  }
}

export default App;