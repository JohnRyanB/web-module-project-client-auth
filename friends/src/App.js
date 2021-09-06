import "./App.css";
import FriendForm from "./components/Friendform";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import Profilepage from "./components/Profilepage";
import { useState } from "react";
import PrivateRoute from "./components/Privateroute";

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleOpen = (e) => {
		setAnchorEl(e.currentTarget);
	};

	const logoutUser = () => {
		//logout();
		setLoggedIn(false);
	};

	const loginUser = () => {
		//signInUser().then(() => {
		//setLoggedIn(true);
		//});
		setLoggedIn(true);
	};

	return (
		<div className="App">
			<Navbar />
			<PrivateRoute exact path="/friend-form" component={FriendForm} />

			<PrivateRoute exact path="/profile-page" component={Profilepage} />

			<Route exact path="/login" component={Login} />
		</div>
	);
}

export default App;
