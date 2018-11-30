import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { doTest } from './redux/actions';
//import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'green',
      banner: 'hello World',
      isOpen: false,
    };
    this.buttonHandler = this.buttonHandler.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  buttonHandler() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  mouseEnter() {
    this.setState({
      color: "green",
      size: 14,
    });
  }

  mouseLeave() {
    this.setState({
      color: "brown",
      size: 10,
    });
  }
  render() {
    let myVariable = <h2>Hello World</h2>;
    let myBanner;
    if (this.state.isOpen) {
      myBanner = <h1>{this.state.banner}</h1>
    }
    return (
      <div className="App">
        
          <img src={logo}  className="App-logo" alt="logo" />
          <p style={{color: this.state.color, fontSize: this.state.size}}>
            {myVariable}
          </p>
          {myBanner}
          <button onClick={this.buttonHandler} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} >Click Me</button>
        
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    test: state.testReducer.test,
  };
};

const mapDispatchToProps = { doTest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
