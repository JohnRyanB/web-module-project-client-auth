import axios from "axios";
import { useEffect, useState } from "react";
import { axiosWithAuth } from "../api/axios-with-auth";
import Friend from "./Friend";

export const Profilepage = () => {
	// const friend = {
	// 	id: "1234",
	// 	name: "Johnny",
	// 	age: 22,
	// 	email: "me@me.me",
	// };
	const [friends, setFriends] = useState([]);
	const getFriends = useEffect(() => {
		// const token = localStorage.getItem("token");
		axiosWithAuth()
			.get("/friends")
			.then((res) => {
				setFriends(res.data);
				console.log(friends);
				return;
			})
			.catch((err) => console.log("error on friends get", err));
	}, []);

	return (
		<div>
			<button onClick={getFriends}> </button>
			{friends.map((friends) => {
				return (
					<Friend
						key={friends.id}
						name={friends.name}
						age={friends.age}
						email={friends.email}
					/>
				);
			})}
		</div>
	);
};

export default Profilepage;
