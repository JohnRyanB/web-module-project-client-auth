import Friend from "./Friend";

export const profilePage = () => {
	const friend = {
		id: "1234",
		name: "Johnny",
		age: 22,
		email: "me@me.me",
	};
	return (
		<div>
			<Friend></Friend>
			{/* {Friend.map((friends) => {
				return <Friend key={friends.id} details={friends} />;
			})} */}
		</div>
	);
};

export default profilePage;
