let ageInput = document.getElementById('Age');
let phoneInput = document.getElementById('Phone Number');

ageInput.addEventListener('keydown', avoidLetters);
phoneInput.addEventListener('keydown', avoidLetters);

function avoidLetters(e) {
	let key = e.key.charCodeAt();

	if ((key >= 97 && key <= 122) || key == 241) {
		e.preventDefault();
	}
}

export function isInvalid(str, type) {
	let regexTypes = {
		text: /^[a-zA-Z]+$/,
		email: /\S+@\S+\.\S+/,
		tel: /^[0-9]{4}-[0-9]{4}$/,
		age: /^[0-9]{2}$/,
		url: /\S+\.\S+\.\S+/,
	};

	let regex = regexTypes[type];

	return !str.value.match(regex) ? true : false;
}
