import { useApolloClient } from "@apollo/client";
import { useNavigate } from "react-router-native";
import { useEffect } from "react";

import useAuthStorage from '../hooks/useAuthStorage';

const SignOut = () => {
	const client = useApolloClient();
	const navigate = useNavigate();
	const authStorage = useAuthStorage();

	useEffect(() => {
		const signOut = async() => {
			try {
				await authStorage.removeAccessToken();
				await client.resetStore();
				navigate("/");
			} catch (error) {
				console.log("Error during sign out:", error);
			}
		};

		signOut();
	}, [client, navigate]);

	return null;
};

export default SignOut;
