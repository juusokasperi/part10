import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-native';
import { useApolloClient } from '@apollo/client';

import useAuthStorage from '../hooks/useAuthStorage';

import { SIGN_IN } from '../graphql/mutations';

const useSignIn = () => {
	const authStorage = useAuthStorage();
	const apolloClient = useApolloClient();
	const [login, result] = useMutation(SIGN_IN);
	const navigate = useNavigate();

	const signIn = async ({ username, password }) => {
		try {
			const { data } = await login({
				variables: {
					credentials: { username, password }
				}
			});

			if (data && data.authenticate) {
				await authStorage.setAccessToken(data.authenticate.accessToken);
				navigate("/");
				apolloClient.resetStore();
				return (data);
			} else {
				throw new Error('Auth failed.');
			}
		} catch (error) {
			console.error('Sign in error:', error);
			throw error;
		}
	};

	return [signIn, result];
  };

export default useSignIn;
