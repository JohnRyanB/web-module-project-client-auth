import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const initialFormValue = {
	id: "",
	name: "",
	age: 0,
	email: "",
};

const initialFriends = [];

const FriendForm = () => {
	const [friendData, setFriendData] = useState(initialFormValue);

	const [friends, setFriends] = useState(initialFriends);

	const onChangeHandler = (e) => {
		setFriendData({ ...friendData, [e.target.name]: e.target.value });
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
		const { name, age, email } = friendData;
		setFriends([
			...friends,
			{
				id: uuidv4(),
				name: name,
				age: age,
				email: email,
			},
		]);
		const newFriend = {
			id: "1231233432",
			name: "John",
			age: 22,
			email: "John@John.John",
			// // id: uuidv4(),
			// name: friendData.name,
			// age: friendData.age,
			// email: friendData.email,
		};
		console.log(newFriend);
		axios
			.post("http://localhost:46000/api/friends", newFriend)
			.then((res) => {
				console.log(res);
				// setFriends(res.data, ...friends);
			})
			.catch((err) => {
				console.log("error during post", err);
			})
			.finally(() => {
				setFriendData(initialFormValue);
			});
		setFriendData(initialFormValue);
	};

	return (
		<div>
			<h2>Add a New Friend!</h2>
			<form onSubmit={onSubmitHandler}>
				<input
					name="name"
					value={friendData.name}
					type="text"
					onChange={onChangeHandler}
				/>
				<input
					name="age"
					value={friendData.age}
					type="number"
					onChange={onChangeHandler}
				/>
				<input
					name="email"
					value={friendData.email}
					type="email"
					onChange={onChangeHandler}
				/>
				<button name="submit">Submit</button>
			</form>
		</div>
	);
};

export default FriendForm;
