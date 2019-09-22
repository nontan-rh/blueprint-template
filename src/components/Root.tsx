import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { Button } from '@blueprintjs/core';
import { connect } from 'react-redux';
import { State } from '../states';
import { increment } from '../actions';

interface Props {
  counter: number;
  dispatch: Dispatch;
}

const mapStateToProps = (state: State) => ({
  counter: state.counter,
});

class Root extends Component<Props> {
  onClick = () => {
    const { dispatch } = this.props;
    dispatch(increment());
  };

  render() {
    const { counter } = this.props;
    return (
      <Button
        intent='success'
        text={`Hello world ${counter}`}
        onClick={this.onClick}
      />
    );
  }
}

export default connect(mapStateToProps)(Root);
