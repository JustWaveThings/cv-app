import React, { Component } from 'react';
import Header from './Header';
import Row from './Row';
import ButtonRow from './ButtonRow';

class Section extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const rows = Object.entries(this.props.section).map(
			([key, value], index) => {
				if (
					key === 'title' ||
					key === 'edit' ||
					key === 'addNew' ||
					key === 'submit'
				)
					return null;
				return (
					<Row
						key={index}
						rowTitle={key}
						rowValue={value}
					/>
				);
			}
		);

		return (
			<div>
				<Header sectionTitle={this.props.section.title} />
				{rows}
				<ButtonRow />
			</div>
		);
	}
}

export default Section;
