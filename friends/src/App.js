import "./App.css";
import FriendForm from "./components/Friendform";
import Navbar from "./components/Navbar";
import { Route, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Profilepage from "./components/Profilepage";
import PrivateRoute from "./components/Privateroute";

function App() {
	const Logout = () => {
		return <Redirect to="/login">{localStorage.removeItem("token")}</Redirect>;
	};

	return (
		<div className="App">
			<Navbar />
			<Route exact path="/" />
			<PrivateRoute exact path="/friend-form" component={FriendForm} />

			<PrivateRoute exact path="/profile-page" component={Profilepage} />

			<Route exact path="/login" component={Login} />
			<Route exact path="/" onClick={Logout()} />
		</div>
	);
}

export default App;
