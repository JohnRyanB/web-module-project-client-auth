export const Friend = (props) => {
	const { name, age, email } = props;

	return (
		<div className="FriendContainer">
			<div className="Friend">
				<h3>{name}</h3>
				<p>{age}</p>
				<p>{email}</p>
			</div>
		</div>
	);
};

export default Friend;
