let overlay = document.getElementById('overlay');
let closeIcon = document.getElementById('closeIcon');

overlay.addEventListener('click', hideModal);
closeIcon.addEventListener('click', hideModal);

function hideModal() {
	overlay.style.display = 'none';
}

export function showModal() {
	overlay.style.display = 'block';
}