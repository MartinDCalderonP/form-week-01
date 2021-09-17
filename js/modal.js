let overlay = document.getElementById('overlay');
let closeIcon = document.getElementById('closeIcon');
let modal = document.getElementById('modal');

overlay.addEventListener('click', (e) => {
	hideModal();
});

closeIcon.addEventListener('click', (e) => {
	hideModal();
});

function hideModal() {
	overlay.style.display = 'none';
	modal.style.display = 'none';
}

export function showModal() {
	overlay.style.display = 'block';
	modal.style.display = 'block';
}
