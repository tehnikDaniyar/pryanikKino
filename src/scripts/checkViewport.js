
export function checkViewport({ state, dispatch, set, widthVW }) {
	const { innerWidth: width, innerHeight: height } = window;
	console.log('CHECKVIEWPORT', state, innerWidth);

	if (innerWidth < widthVW) {

		if (state == false) {
			dispatch(set(true));
		}
	};

	if (innerWidth > widthVW) {
		if (state == true) {
			dispatch(set(false));
		}
	}

};