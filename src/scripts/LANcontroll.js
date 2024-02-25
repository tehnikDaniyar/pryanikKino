export const LANcontroll = (set, dispatch) => {
	window.addEventListener('offline', oflineHandler);

	window.addEventListener('online', () => {
		dispatch(set(true));
		window.removeEventListener('click', clickHandler)
	})

	function oflineHandler() {
		window.addEventListener('click', clickHandler)
	};

	function clickHandler(e) {
		const target = e.target;
		if (target.tagName === 'A') {
			console.log(target.tagName);
			dispatch(set(false))
		};
	};
}