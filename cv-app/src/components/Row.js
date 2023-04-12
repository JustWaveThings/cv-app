import React, { Component } from 'react';
import Label from './Label';
import Input from './Input';
class Row extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	render() {
		return (
			<div>
				<Label rowTitle={`${this.props.rowValue}:`} />
				<Input />
			</div>
		);
	}
}

export default Row;
