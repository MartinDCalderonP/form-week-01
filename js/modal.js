let overlay = document.getElementById('overlay');
let closeIcon = document.getElementById('closeIcon');
let modal = document.getElementById('modal');

overlay.onclick = () => {
	hideModal();
};

closeIcon.onclick = () => {
	hideModal();
};

function hideModal() {
	overlay.style.display = 'none';
	modal.style.display = 'none';
}

export function showModal() {
	overlay.style.display = 'block';
	modal.style.display = 'block';
}
