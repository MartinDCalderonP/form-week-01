'use strict';
import isValidValue from './validations.js';
import './konamiCode.js';
import './rangeChanger.js';

const form = document.getElementById('Form');
const formItems = form.elements;
const errorsList = document.getElementById('Errors List');
let errorsArray = [];

form.addEventListener('submit', customSubmit);

function customSubmit(e) {
	e.preventDefault();

	errorsArray = [];

	for (let i = 0; i < formItems.length - 1; i++) {
		if (formItems[i].type !== 'range') {
			typeof isValidValue(formItems[i]) !== 'string'
				? inputSuccess(formItems[i])
				: inputError(formItems[i], isValidValue(formItems[i]));
		}
	}

	errorsArray.length > 0
		? (errorsList.innerHTML = errorsArray.join(''))
		: valuesToConsoleTable();
}

function inputSuccess(input) {
	if (input.type !== 'checkbox') {
		input.parentElement.className = 'inputDiv success';
	}
}

function inputError(input, message) {
	errorsArray.push(message);

	if (input.type !== 'checkbox') {
		input.parentElement.className = 'inputDiv error';
	}
}

function valuesToConsoleTable() {
	errorsList.innerHTML = '';

	let tableItems = {};

	for (let i = 0; i < formItems.length - 1; i++) {
		formItems[i].type !== 'checkbox'
			? (tableItems[formItems[i].name] = [formItems[i].value])
			: (tableItems[formItems[i].name] = [formItems[i].checked]);
	}

	console.table(tableItems);
}
