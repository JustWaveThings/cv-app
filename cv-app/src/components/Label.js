import React, { Component } from 'react';

class Label extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	render() {
		return <label>{this.props.rowTitle}</label>;
	}
}

export default Label;
