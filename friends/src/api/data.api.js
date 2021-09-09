import axios from "axios";
import { axiosWithAuth } from "./axios-with-auth";

export const getWelcomeMessage = () => {
	return axios.get("http://localhost:46000").then((result) => result.data);
};

export const getProtectedDataCall = () => {
	axiosWithAuth()
		.get("http://localhost:46000/protected")
		.then((result) => console.log(result));
};
