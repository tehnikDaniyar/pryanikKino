import react from "react";
import { useRouteError } from "react-router-dom";


export default function () {
	const error = useRouteError();


	return (
		<>
			<h1 style={{ fontSize: 56, color: 'red' }}>ERROR</h1>
		</>
	)
}