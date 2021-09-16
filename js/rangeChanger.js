let expLevel = document.getElementById('Level of Experience');
let begginer = document.getElementById('begginer');
let advanced = document.getElementById('advanced');

begginer.addEventListener('click', (e) => {
	expLevel.value = 0;
});

advanced.addEventListener('click', (e) => {
	expLevel.value = 5;
});