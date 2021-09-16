'use strict';
import { isInvalid } from './validations.js';
import './konamiCode.js';
import './rangeChanger.js';

let form = document.getElementById('Form');
let errorsList = document.getElementById('Errors List');
let errors = [];

form.addEventListener('submit', (e) => {
	e.preventDefault();

	errors = [];
	let formItems = form.elements;
	let password = '';

	for (let i = 0; i < formItems.length - 1; i++) {
		if (formItems[i].value.length === 0) {
			errors.push(`<li>${formItems[i].name} is required.</li>`);
		} else {
			formItems[i].type === 'text' &&
				isInvalid(formItems[i], 'text') &&
				errors.push(`<li>${formItems[i].name} must have letters only.</li>`);

			formItems[i].type === 'email' &&
				isInvalid(formItems[i], 'email') &&
				errors.push(`<li>${formItems[i].name} has an invalid format.</li>`);

			if (formItems[i].id === 'Password') {
				password = formItems[i].value;
			}

			formItems[i].id === 'Repeat Password' &&
				password !== formItems[i].value &&
				errors.push(`<li>Passwords do not match.</li>`);

			formItems[i].type === 'tel' &&
				isInvalid(formItems[i], 'tel') &&
				errors.push(`<li>${formItems[i].name} has an invalid format.</li>`);

			formItems[i].type === 'number' &&
				isInvalid(formItems[i], 'age') &&
				errors.push(
					`<li>${formItems[i].name} must be a number between 1 and 99.</li>`
				);

			formItems[i].type === 'url' &&
				isInvalid(formItems[i], 'url') &&
				errors.push(`<li>${formItems[i].name} has an invalid format.</li>`);

			formItems[i].type === 'checkbox' &&
				!formItems[i].checked &&
				errors.push(`<li>Accept the ${formItems[i].name} is required.</li>`);
		}
	}

	if (errors.length > 0) {
		errorsList.innerHTML = errors.join('');
	} else {
		errorsList.innerHTML = '';

		let tableItems = {};

		for (let i = 0; i < formItems.length - 1; i++) {
			tableItems[formItems[i].name] = [formItems[i].value];
		}

		console.table(tableItems);
	}
});
