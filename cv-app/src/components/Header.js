import React, { Component } from 'react';

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	render() {
		return <h3>{this.props.sectionTitle}</h3>;
	}
}

export default Header;
