import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addOne, addTwo, subOne, subTwo } from "./../../actions/action";

class Counter extends Component {
  render() {
    return (
      <div>
        <p>Counter : {this.props.counter}</p>
        <button onClick={() => this.props.addOne()}>Add 1</button>
        <button onClick={() => this.props.addTwo()}>Add 2</button>
        <button onClick={() => this.props.subOne()}>Sub 1</button>
        <button onClick={() => this.props.subTwo()}>Sub 2</button>
      </div>
    );
  }
}

const mapStateToProps = ({ addReducer, subtractReducer }) => {
  return {
    counter: addReducer.counter
  };
};

const mapDispatchToProps = dispatch => {
  //   return {
  //     onAddOne: () => dispatch({ type: "ADD_TWO", payload: 1 }),
  //     onAddTwo: () => dispatch({ type: "ADD_TWO", payload: 2 }),
  //     onSubOne: () => dispatch({ type: "SUB_ONE", payload: 1 }),
  //     onSubTwo: () => dispatch({ type: "SUB_TWO", payload: 2 })
  //   };
  return bindActionCreators({ addOne, addTwo, subOne, subTwo }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
