import React, { Component } from 'react';
import Submit from './Submit';
import Edit from './Edit';
import AddNew from './AddNew';

export class ButtonRow extends Component {
	render() {
		return (
			<div>
				<Edit />
				<AddNew />
				<Submit />
			</div>
		);
	}
}

export default ButtonRow;
