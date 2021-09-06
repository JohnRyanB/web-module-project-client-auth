import { useState } from "react";

export const Friend = (props) => {
	const testFriend = {
		id: "0123253-12",
		name: "John",
		age: 31,
		email: "jrbbusinesscontact@gmail.com",
	};

	const [friend, setFriend] = useState(testFriend);

	return (
		<div>
			<h3>{friend.name}</h3>
			<p>{friend.age}</p>
			<p>{friend.email}</p>
		</div>
	);
};

export default Friend;
