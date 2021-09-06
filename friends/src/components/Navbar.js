import { NavLink } from "react-router-dom";

export const navbar = () => {
	return (
		<div>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/friend-form">Add Friend</NavLink>
			{/* friend-list should redirect to login if not logged in */}
			<NavLink to="/profile-page">Profile</NavLink>
			{/* if we are logged in, make this next link a logout button */}
			<NavLink to="/login">Login</NavLink>
			<NavLink to="/logout">Logout</NavLink>
		</div>
	);
};

export default navbar;
