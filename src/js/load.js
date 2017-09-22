
const load = () => {

	// page is ready
	setTimeout(() => {
		document.querySelector('body').classList.add('loaded');
	}, 1500);

	// variables
	const loaderWrapper = document.querySelector('#loader-wrapper');
	const mainContent = document.querySelector('main.main');

	const removeLoader = () => {
    ['transitionend', 'webkitTransitionEnd', 'mozTransitionEnd', 'oTransitionEnd'].forEach(function (transition) {
			loaderWrapper.addEventListener(transition, function () {
				loaderWrapper.style.display = 'none';
				if (loaderWrapper.style.display === 'none') {
					showContent();
				}
			}, false);
		});
	};

	const showContent = () => {
		mainContent.setAttribute('style', 'visibility: visible; opacity: 1');
	};

	removeLoader();

};
