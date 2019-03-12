import React from 'react';

export function Select(props) {
	const {
		options,
		onChange,
		selectedValue,
	} = props;
	let selectOptions = null;

	/*
	 * 'options' is an array of object. Each object should look like this:
	 *
	 * {
	 *    displayText: 'Specialty Items',
	 *    value: 'specialty',
	 * }
	 *
	*/

	// if 'options' is, in fact, an array as it should be...
	if (Array.isArray(options)) {
		// map over that array, using each objects' properties to create an <option> tag
		selectOptions = options.map(option => (
			<option key={ option.value } value={ option.value }>{ option.displayText }</option>
		));
	}


	return (
		<select onChange={ onChange } value={ selectedValue } disabled={ !Array.isArray(options) }>
			<option value="">-- Select --</option>
			{ selectOptions }
		</select>
	);
}
