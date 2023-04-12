import React, { Component } from 'react';
import './App.css';

export class App extends Component {
	render() {
		return <div className="App"></div>;
	}
}

const TEST = [
	{
		Profile: 'Contact Section',
		name: 'name',
		email: 'email',
		phone: 'phone',
		edit: 'edit',
		submit: 'submit',
	},
	{
		Education: 'Education Section',
		school: 'school',
		degree: 'degree',
		year: 'year',
		edit: 'edit',
		addNew: 'add new',
		submit: 'submit',
	},
	{
		Experience: 'Experience Section',
		company: 'company',
		position: 'position',
		yearStart: 'Year Started',
		yearEnd: 'Year Ended',
		description: 'Duties Performed',
		edit: 'edit',
		addNew: 'add new',
		submit: 'submit',
	},
];

export default App;
