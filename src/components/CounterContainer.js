import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  counter: state
});

const mapDispatchToProps = dispatch => ({
  onAdd1: () => dispatch({ type: 'ADD1' }),
  onAdd10: () => dispatch({ type: 'ADD10' }),
  onRemove1: () => dispatch({ type: 'REMOVE1' }),
  onRemove10: () => dispatch({ type: 'REMOVE10' }),
  onReset: () => dispatch({ type: 'RESET' })
});

//const CounterComponent = ({ counter, onAdd1, onAdd10 }) => (
const CounterComponent = props => (
  <div>
    <p>{props.counter}</p>
    <button onClick={props.onAdd1}>Add 1</button>
    <button onClick={props.onAdd10}>Add 10</button>
    <br />
    <button onClick={props.onRemove1}>Remove 1</button>
    <button onClick={props.onRemove10}>Remove 10</button>
    <br />
    <button onClick={props.onReset}>Reset</button>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent);
