document.addEventListener('DOMContentLoaded', () => {
	const animElems = document.querySelectorAll('.anim-item');

	function scrollAnimation() {
		// Координата середины окна
		let viewCoord = window.innerHeight + window.scrollY;

		animElems.forEach(item => {
			// Координата включения анимации
			let elemY = item.offsetTop + item.offsetHeight / 2;

			console.log(`${elemY} - координата включения анимации`);
			console.log(`${viewCoord} - координата на которой наша линия`);
			if (viewCoord >= elemY) {
				item.classList.add('anim-on');
			}
		});
	}

	scrollAnimation();
	window.addEventListener('scroll', scrollAnimation);
});
