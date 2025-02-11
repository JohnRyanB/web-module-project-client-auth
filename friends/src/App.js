import "./App.css";
import FriendForm from "./components/Friendform";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import Profilepage from "./components/Profilepage";
import PrivateRoute from "./components/Privateroute";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Route exact path="/" />
			<PrivateRoute exact path="/friend-form" component={FriendForm} />

			<PrivateRoute exact path="/profile-page" component={Profilepage} />

			<Route exact path="/login" component={Login} />
		</div>
	);
}

export default App;
