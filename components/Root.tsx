import React, { Component } from 'react';
import { Button } from "@blueprintjs/core";

interface Props {
}

interface State {
    counter: number,
}

export default class Root extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            counter: 0,
        };
    }

    onClick = () => {
        const { counter } = this.state;
        this.setState({ counter: counter + 1 });
    }

    render() {
        const { counter } = this.state;
        return (<Button intent="success" text={`Hello world ${counter}`} onClick={this.onClick} />);
    }
}
