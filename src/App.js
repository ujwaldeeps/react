import React,{ Component } from 'react';
class App extends Component {

      constructor(props){
        super(props);
        this.state = {firstNumber:undefined,secondNumber:undefined,result:undefined};
        this.onChange = this.onChange.bind(this);
        this.summ = this.summ.bind(this);
    }

    summ(){

            this.setState({
               result: (parseInt(this.state.firstNumber,10) + parseInt(this.state.secondNumber,10)).toString()
            });
           // window.alert(result);

    }

    onChange(event){
        this.setState({ [event.target.name]: event.target.value });
      }


  render() {
    return (
        <div>
            <input type="number" name="firstNumber" max-width="50px" onChange={this.onChange} /><br />
            <input type="number" name="secondNumber" max-width="50px" onChange={this.onChange} /><br />
            <button onClick={this.summ}>click me</button>
            <p  id="check">{this.state.result}</p>
        </div>);
  }
}

export default App;