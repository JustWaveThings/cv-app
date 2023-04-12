import React, { Component } from 'react';

class Input extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	render() {
		return <input>{this.props.rowValue}</input>;
	}
}

export default Input;
