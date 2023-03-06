import scrollController from '../../common/blockBodyScroll.js';

let isModalOpen = false;
let timeModalBlock = 500;

document.body.addEventListener('click', e => {
	if (e.target.dataset.modalLink) {
		let modal = document.querySelector(`.${e.target.dataset.modalLink}`);

		if (isModalOpen === false) {
			openModal();
		}

		function openModal() {
			modal.classList.add('open');
			scrollController.disabledScroll();
			setTimeout(() => (isModalOpen = true), timeModalBlock);

			modal.addEventListener('click', e => {
				if (isModalOpen && (!e.target.closest('.modal__body') || e.target.closest('.modal__button-close'))) {
					closeModal();
				}
			});
			document.body.addEventListener('keydown', e => {
				if (isModalOpen && e.code == 'Escape') {
					closeModal();
				}
			});
		}

		function closeModal() {
			modal.classList.remove('open');
			scrollController.enabledScroll();
			setTimeout(() => (isModalOpen = false), timeModalBlock);
		}
	}
});
