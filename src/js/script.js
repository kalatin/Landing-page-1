let isOpen = false;
let timeBlock = 500;

document.body.addEventListener('click', e => {
	if (e.target.dataset.modalLink) {
		if (isOpen === false) {
			openModal(document.querySelector(`.${e.target.dataset.modalLink}`), e.target);
		}
	}
});

function openModal(modal, button) {
	modal.classList.add('open');
	setTimeout(() => {
		isOpen = true;
	}, timeBlock);

	modal.addEventListener('click', e => {
		if (isOpen && (!e.target.closest('.modal__body') || e.target.closest('.modal__button-close'))) {
			modal.classList.remove('open');
			setTimeout(() => {
				isOpen = false;
			}, timeBlock);
		}
	});
}
