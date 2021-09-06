import "./App.css";
import FriendForm from "./components/Friendform";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import Profilepage from "./components/Profilepage";
import { useState } from "react";

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className="App">
			<Navbar />
			<Route exact path="/friend-form" render={() => <FriendForm />} />
			<Route exact path="/profile-page" render={() => <Profilepage />} />
			<Route exact path="/login" render={() => <Login />} />
		</div>
	);
}

export default App;
