import react from "react";
export default function NumberInput({ state, hundler, ...props }) {
	return (
		<input
			{...props}
			type="number"
			value={state}
			onChange={(e) => hundler(e.target.value)}
		/>
	)
}	