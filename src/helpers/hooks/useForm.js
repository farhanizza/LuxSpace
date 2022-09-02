// import React from 'react';

// export default function useForm(initialState) {
// 	const [State, setState] = React.useState(initialState);
// 	function fnUpdateState(event) {
// 		setState((prev) => ({
// 			...prev,
// 			[event.target.name]: event.target.value,
// 		}));
// 	}
// 	return { State, fnUpdateState };
// }

import { useState } from 'react';

export default function useForm(initialState) {
	const [state, setstate] = useState(initialState);

	function fnUpdateState(event) {
		setstate((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	}
	return { state, fnUpdateState };
}
