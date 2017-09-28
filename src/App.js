import React,{Component} from 'react';


class App extends Component {


    summ(a,b){
        window.alert(a+b);
    }

  render() {
    return (
        <div>
            <input type="number" max-width="50px" id="FirstNumber"></input><br />
            <input type="number" max-width="50px" id="SecondNumber"></input><br />
            <button onClick={()=>{this.summ(5,6)}} id="check">click me</button>
        </div>);
  }
}

export default App;