import axios from "axios";
import { useState } from "react";
const initialFormValues = {
	username: "",
	password: "",
};

export const Login = (props) => {
	const [state, setState] = useState(initialFormValues);
	const [isLogging, setIsLogging] = useState(false);

	const onChangeHandler = (e) => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	const onSubmitHandler = (e) => {
		setIsLogging(true);
		e.preventDefault();
		const login = { ...state };
		console.log("my login", login);
		axios
			.post("http://localhost:46000/api/login", login)
			.then((res) => {
				console.log(res);
				localStorage.setItem("token", res.data.payload);
				console.log(localStorage.getItem("token"));
				props.history.push("/profile-page");
			})
			.catch((err) => console.log("login error", err))
			.finally(() => {
				setState(initialFormValues);
				setIsLogging(false);
			});
	};
	return isLogging === true ? (
		<div>Loading</div>
	) : (
		<div>
			login component
			<form onSubmit={onSubmitHandler}>
				<input
					name="username"
					type="text"
					value={state.username}
					onChange={onChangeHandler}
				/>
				<input
					name="password"
					type="password"
					value={state.password}
					onChange={onChangeHandler}
				/>
				<button>Login</button>
			</form>
		</div>
	);
};
export default Login;
