import scrollController from '../../common/blockBodyScroll.js';

let burger = document.querySelector('.header__burger');
let nav = document.querySelector('.header__nav');
let isOpen = false;

burger.addEventListener('click', e => {
	topOfMenu();

	if (nav.matches('.open') && burger.matches('.close')) {
		scrollController.enabledScroll();
		closeMenu();
	} else {
		scrollController.disabledScroll();
		openMenu();
	}

	window.addEventListener('resize', topOfMenu);
	window.addEventListener('resize', e => {
		if (document.body.clientWidth > 992 && isOpen) {
			closeMenu();
			scrollController.enabledScroll();
		}
	});
});

function openMenu() {
	isOpen = true;
	nav.classList.add('open');
	burger.classList.add('close');
}

function closeMenu() {
	isOpen = false;
	nav.classList.remove('open');
	burger.classList.remove('close');
}

function topOfMenu() {
	let block = document.querySelector('.header__up');
	nav.style.top = `${block.clientHeight + block.getBoundingClientRect().y}px`;
}
