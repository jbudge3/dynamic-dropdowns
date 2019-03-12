import React, { Component } from 'react';
import { Select } from './components/select';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			mainCategory: '',
			subCategory: '',
		};
	}

	_handleMainCategoryChange = (event) => this.setState({
		mainCategory: event.target.value
	});

	_handleSubCategoryChange = (event) => this.setState({
		subCategory: event.target.value
	})

	render() {
		const {
			mainCategory,
			subCategory,
		} = this.state;

		return (
			<div className="App">
				<Select options={ MAIN_CATEGORY_OPTIONS } onChange={ this._handleMainCategoryChange } selectedValue={ mainCategory } />

				<Select options={ SUB_CATEGORY_OPTIONS_OBJECT[mainCategory] } onChange={ this._handleSubCategoryChange } selectedValue={ subCategory } />

				<button type="submit" disabled={ !mainCategory && !subCategory } onClick={ () => console.log('you clicked me') }>Submit</button>
			</div>
		);
	}
}

export default App;

// example with switch statement...I don't like it
function getSubCategoryOptions(mainCategory) {
	switch(mainCategory) {
		case 'cakes':
			return CAKE_OPTIONS;
		case 'cupcakes':
			return CUPCAKE_OPTIONS;
		case 'specialty':
			return SPECIALTY_OPTIONS;
		default:
			return null;
	}
}

const MAIN_CATEGORY_OPTIONS = [
	{
		displayText: 'Cakes',
		value: 'cakes',
	},
	{
		displayText: 'Cupcakes',
		value: 'cupcakes',
	},
	{
		displayText: 'Specialty Items',
		value: 'specialty',
	}
];

const CAKE_OPTIONS = [
	{
		displayText: 'Wedding',
		value: 'wedding',
	},
	{
		displayText: 'Birthday',
		value: 'birthday',
	},
	{
		displayText: 'Special Order',
		value: 'special',
	}
];

const CUPCAKE_OPTIONS = [
	{
		displayText: 'Custom',
		value: 'custom',
	},
	{
		displayText: 'Simple and Delicious',
		value: 'simple',
	}
];

const SPECIALTY_OPTIONS = [
	{
		displayText: 'Unique Desserts',
		value: 'unique',
	},
	{
		displayText: 'Savory Party Platters',
		value: 'platters',
	},
	{
		displayText: 'Diet-friendly',
		value: 'diet'
	},
];

const SUB_CATEGORY_OPTIONS_OBJECT = {
	'cakes': CAKE_OPTIONS,
	'cupcakes': CUPCAKE_OPTIONS,
	'specialty': SPECIALTY_OPTIONS,
};
