import React from 'react';
import './App.css';

function Result(props) {
  return (<label className="result" type="text">{props.value}</label>);
} 

function Current(props) {
  return (<label className="current">{props.value}</label>);
} 

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state={
      result: "0",
      current: "0",
      operator: ""
    };
    this.handleClick=this.handleClick.bind(this);
    this.handleKeyPress=this.handleKeyPress.bind(this);
    this.operate=this.operate.bind(this);
  }

  operate() {
    if(this.state.operator==="+") {
      this.setState({
        result: (Number(this.state.result)+Number(this.state.current)),
        current: "0",
      });
    } else if(this.state.operator==="-") {
      this.setState({
        result: (Number(this.state.result)-Number(this.state.current)),
        current: "0",
      });
    } else if(this.state.operator==="*") {
      this.setState({
        result: (Number(this.state.result)*Number(this.state.current)),
        current: "0",
      });
    } else if(this.state.operator==="/") {
      this.setState({
        result: (Number(this.state.result)/Number(this.state.current)),
        current: "0",
      });
    }
  }

  equals() {
    this.operate();
    this.setState({operator: ""});
  }

  plus() {
    if (this.state.operator==="") {
      this.setState({
        operator: "+",
        result: this.state.result!=="0" && this.state.current==="0" ? this.state.result : this.state.current,
        current: "0"
      });
    } else {
      this.operate();
      this.setState({operator: "+"});
    }
  }

  minus() {
    if (this.state.operator==="") {
      this.setState({
        operator: "-",
        result: this.state.result!=="0" && this.state.current==="0" ? this.state.result : this.state.current,
        current: "0"
      });
    } else {
      this.operate();
      this.setState({operator: "-"});
    }
  }

  multiply() {
    if (this.state.operator==="") {
      this.setState({
        operator: "*",
        result: this.state.result!=="0" && this.state.current==="0" ? this.state.result : this.state.current,
        current: "0"
      });
    } else {
      this.operate();
      this.setState({operator: "*"});
    }
  }

  divide() {
    if (this.state.operator==="") {
      this.setState({
        operator: "/",
        result: this.state.result!=="0" && this.state.current==="0" ? this.state.result : this.state.current,
        current: "0"
      });
    } else {
      this.operate();
      this.setState({operator: "/"});
    }
  }

  handleClick(event) {
    if (event.target.className==="plus") {
      this.plus();
    } else if (event.target.className==="minus") {
      this.minus();
    } else if (event.target.className==="multiply") {
      this.multiply();
    } else if (event.target.className==="divide") {
      this.divide();
    } else if (event.target.className==="equals") {
      this.equals();
    } else if (event.target.className==="reset-all") {
      this.setState({
        result: "0",
        current: "0",
        operator: ""
      });
    } else if (event.target.className==="reset-current") {
      this.setState({
        current: "0",
        operator: ""
      });
    } else if (event.target.className==="0" || event.target.className==="1" || event.target.className==="2" || event.target.className==="3" || event.target.className==="4" || event.target.className==="5" || event.target.className==="6" || event.target.className==="7" || event.target.className==="8" || event.target.className==="9") {
      this.setState({
        current: (this.state.current+event.target.className).replace(/^0/, "")
      });
    }
  }

  handleKeyPress(event) {
    if (event.key==="+") {
      this.plus();
    } else if (event.key==="-") {
      this.minus();
    } else if (event.key==="*") {
      this.multiply();
    } else if (event.key==="/") {
      this.divide();
    } else if (event.charCode===13) {
      this.equals();
    } else if (event.key==="0" || event.key==="1" || event.key==="2" || event.key==="3" || event.key==="4" || event.key==="5" || event.key==="6" || event.key==="7" || event.key==="8" || event.key==="9") {
      this.setState({
        current: (this.state.current+event.key).replace(/^0/, "")
      });
    }
  }

  componentDidMount() {
    document.addEventListener("keypress", this.handleKeyPress);
  }

  render() {
    return (
      <div className="grid-container">
        <Result value={this.state.result+this.state.operator} />
        <Current value={this.state.current} />
        <button className="plus" onClick={this.handleClick}>+</button>
        <button className="minus" onClick={this.handleClick}>-</button>
        <button className="multiply" onClick={this.handleClick}>*</button>
        <button className="divide" onClick={this.handleClick}>/</button>
        <button className="square">x<sup>2</sup></button>
        <button className="root">&#8730;x</button>
        <button className="equals" onClick={this.handleClick}>=</button>
        <button className="reset-current" onClick={this.handleClick}>C</button>
        <button className="reset-all" onClick={this.handleClick}>AC</button>
        <button className="0" onClick={this.handleClick}>0</button>
        <button className="1" onClick={this.handleClick}>1</button>
        <button className="2" onClick={this.handleClick}>2</button>
        <button className="3" onClick={this.handleClick}>3</button>
        <button className="4" onClick={this.handleClick}>4</button>
        <button className="5" onClick={this.handleClick}>5</button>
        <button className="6" onClick={this.handleClick}>6</button>
        <button className="7" onClick={this.handleClick}>7</button>
        <button className="8" onClick={this.handleClick}>8</button>
        <button className="9" onClick={this.handleClick}>9</button>
        <button className="sign">+/-</button>
        <button className="dot">.</button>
      </div>
    );
  }
}

export default App;
