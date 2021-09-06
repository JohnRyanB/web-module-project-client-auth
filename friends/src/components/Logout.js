import { useState } from "react";
import { Redirect } from "react-router";

export const Logout = () => {
	const [logOut, setLogOut] = useState(localStorage.getItem("token"));
	localStorage.setItem("token", "null");
	console.log(localStorage.getItem("token"));
	return <Redirect exact path="./" />;
};

export default Logout;
