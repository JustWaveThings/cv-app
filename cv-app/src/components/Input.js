import React, { Component } from 'react';

class Input extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	handleChange = event => {
		if (this.props.onChange) {
			this.props.onChange(event.target.value);
			console.log(event.target.value);
		}
	};

	handleInputChange = value => {
		this.setState({ inputValue: value });
	};

	render() {
		let output = null;
		if (this.props.rowTitle === 'description') {
			output = (
				<textarea
					value={this.props.rowValue}
					onChange={this.handleChange}
				></textarea>
			);
		} else {
			output = (
				<input
					value={this.props.rowValue}
					onChange={this.handleChange}
				></input>
			);
		}
		return output;
	}
}

export default Input;
