import { NavLink, Redirect } from "react-router-dom";

export const navbar = () => {
	const Logout = () => {
		localStorage.removeItem("token");
		return <Redirect to="/login"></Redirect>;
	};
	return (
		<div className="App-header">
			<NavLink className="App-link" to="/">
				Home
			</NavLink>
			<NavLink className="App-link" to="/friend-form">
				Add Friend
			</NavLink>
			{/* friend-list should redirect to login if not logged in */}
			<NavLink className="App-link" to="/profile-page">
				Profile
			</NavLink>
			{/* if we are logged in, make this next link a logout button */}
			<NavLink className="App-link" to="/login">
				Login
			</NavLink>
			<NavLink className="App-link" to="/" onClick={() => Logout()}>
				Logout
			</NavLink>
		</div>
	);
};

export default navbar;
