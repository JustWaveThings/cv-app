import React, { Component } from 'react';
import './App.css';
import Section from './components/Section';

export class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>CV App</h1>
				<Section section={SECTIONS[0]} />
				<Section section={SECTIONS[1]} />
				<Section section={SECTIONS[2]} />
			</div>
		);
	}
}

export const SECTIONS = [
	{
		title: 'My Contact Information',
		name: 'Name',
		email: 'Email',
		phone: 'Phone',
		edit: 'Edit',
		submit: 'Submit',
	},
	{
		title: 'My Education',
		school: 'School',
		degree: 'Degree',
		year: 'Year Completed',
		edit: 'Edit',
		addNew: 'Add New',
		submit: 'Submit',
	},
	{
		title: 'My Relevant Experience',
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
