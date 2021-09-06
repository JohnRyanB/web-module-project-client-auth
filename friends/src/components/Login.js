import axios from "axios";
import { useState } from "react";
import { axiosWithAuth } from "../api/axios-with-auth";
const initialFormValues = {
	username: "",
	password: "",
};

export const Login = () => {
	const [state, setState] = useState(initialFormValues);
	const [isLoggin, setIsLogging] = useState(false);

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
				// localStorage.setItem('token', res.data.token);
			})
			.catch((err) => console.log("login error", err))
			.finally(() => {
				setState(initialFormValues);
				setIsLogging(false);
			});
	};

	return (
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
