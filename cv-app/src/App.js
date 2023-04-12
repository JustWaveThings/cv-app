import React, { Component } from 'react';
import './App.css';

export class App extends Component {
	render() {
		return <div className="App"></div>;
	}
}

export const TEST = [
	{
		profile: 'Contact Section',
		name: 'Name',
		email: 'Email',
		phone: 'Phone',
		edit: 'Edit',
		submit: 'Submit',
	},
	{
		education: 'Education Section',
		school: 'School',
		degree: 'Degree',
		year: 'Year Completed',
		edit: 'Edit',
		addNew: 'Add New',
		submit: 'Submit',
	},
	{
		experience: 'Experience Section',
		company: 'Company',
		position: 'Position',
		yearStart: 'Year Started',
		yearEnd: 'Year Ended',
		description: 'Duties Performed',
		edit: 'Edit',
		addNew: 'Add New',
		submit: 'Submit',
	},
];

export default App;
