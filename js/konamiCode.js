import { showModal } from './modal.js';

let code = ['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft', 'A', 'B'];
let position = 0;

document.addEventListener('keydown', konamiCode);

function konamiCode(e) {
	let key = e.key;
	let required = code[position];

	if (key === 'a' || key === 'b') {
		key = key.toUpperCase();
	}

	key === required ? position++ : (position = 0);

	if (position === code.length) {
		showModal();
		position = 0;
	}
}
