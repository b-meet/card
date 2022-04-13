import React from "react";
import reactDom from "react-dom";
import App from "./App";
import "./index.css";

function BirthdayList() {
	return (
		<article className='wrapper'>
			<App />
		</article>
	);
}

reactDom.render(<BirthdayList />, document.getElementById("root"));
