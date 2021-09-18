const expLevel = document.getElementById('Level of Experience');
const begginer = document.getElementById('begginer');
const advanced = document.getElementById('advanced');

begginer.addEventListener('click', (e) => {
	expLevel.value = 0;
});

advanced.addEventListener('click', (e) => {
	expLevel.value = 5;
});