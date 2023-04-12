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
				<Label
					htmlFor={this.props.rowValue}
					rowTitle={`${this.props.rowValue}:`}
				/>
				<Input
					type="text"
					id={this.props.rowValue}
				/>
			</div>
		);
	}
}

export default Row;
