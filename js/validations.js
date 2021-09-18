const firstName = document.getElementById('First Name');
const lastName = document.getElementById('Last Name');
const ageInput = document.getElementById('Age');
const phoneInput = document.getElementById('Phone Number');

firstName.addEventListener('keydown', avoidNumbers);
lastName.addEventListener('keydown', avoidNumbers);
ageInput.addEventListener('keydown', avoidLetters);
phoneInput.addEventListener('keydown', avoidLetters);

function avoidLetters(e) {
	let key = e.key.charCodeAt();

	if ((key >= 97 && key <= 122) || key == 241) {
		e.preventDefault();
	}
}

function avoidNumbers(e) {
	let key = e.key.charCodeAt();

	if (key >= 48 && key <= 57) {
		e.preventDefault();
	}
}

let currentPassword = '';

export default function isValidValue(input) {
	if (input.value.length === 0) {
		return `<li>${input.name} is required.</li>`;
	}

	if (input.id === 'Password') {
		currentPassword = input.value;
	}

	if (input.id === 'Repeat Password') {
		if (currentPassword !== input.value) {
			return `<li>Passwords do not match.</li>`;
		}

		return true;
	}

	if (input.type === 'checkbox' && !input.checked) {
		return `<li>Accept the ${input.name} is required.</li>`;
	}

	const regexTypes = {
		text: /^[a-zA-Z]+$/,
		email: /\S+@\S+\.\S+/,
		tel: /^[0-9]{4}-[0-9]{4}$/,
		number: /^[0-9]{2}$/,
		url: /\S+\.\S+\.\S+/,
	};

	const messagesTypes = {
		text: `<li>${input.name} must have letters only.</li>`,
		email: `<li>${input.name} format must be "example@example.com".</li>`,
		tel: `<li>${input.name} format must be "XXXX-XXXX".</li>`,
		number: `<li>${input.name} must be a number between 1 and 99.</li>`,
		url: `<li>${input.name} format must be "http://www.example.com".</li>`,
	};

	let regex = regexTypes[input.type];
	let message = messagesTypes[input.type];

	if (input.value.match(regex)) {
		return true;
	} else {
		return message;
	}
}
