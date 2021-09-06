import axios from "axios";
import { useState } from "react";
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
		axios
			.post("http://localhost:5000/api/login", login)
			.then((res) => {
				console.log(res);
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
