import Text from './Text';
import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';

import useSignIn from '../hooks/useSignIn';
import theme from '../theme';

const validationSchema = yup.object().shape({
	username: yup
		.string()
		.required('Username is required'),
	password: yup
		.string()
		.required('Password is required'),
});

const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.colors.repositoryBg,
		padding: 20,
		alignSelf: 'stretch',
	},
	inputContainer: {
		borderWidth: 1,
		borderColor: '#000000',
		borderRadius: 5,
		marginBottom: 5,
		padding: 10,
	},
	inputErrorContainer: {
		borderColor: theme.colors.error,
	},
	buttonContainer: {
		borderRadius: 5,
		borderColor: '#000000',
		backgroundColor: theme.colors.primary,
		padding: 10,
	},
})

const initialValues = {
	username: '',
	password: '',
};

const SignInForm = ({ onSubmit }) => {
	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit,
	});

	return (
		<View style={styles.container}>
			<View style={[
				styles.inputContainer,
				formik.touched.username && formik.errors.username && styles.inputErrorContainer
			]}>
				<TextInput
					placeholder="Username"
					value={formik.values.username}
					onChangeText={formik.handleChange('username')}
				/>
			</View>
			{formik.touched.username && formik.errors.username && (
				<Text style={{ color: theme.colors.error, paddingBottom: 5 }}>{formik.errors.username}</Text>
			)}
			<View style={[
				styles.inputContainer,
				formik.touched.username && formik.errors.username && styles.inputErrorContainer
			]}>
				<TextInput
					placeholder="Password"
					value={formik.values.password}
					onChangeText={formik.handleChange('password')}
					secureTextEntry
				/>
			</View>
			{formik.touched.password && formik.errors.password && (
				<Text style={{ color: theme.colors.error, paddingBottom: 5 }}>{formik.errors.password}</Text>
			)}
			<Pressable style={styles.buttonContainer} onPress={formik.handleSubmit}>
				<Text color="textInvert">Sign in</Text>
			</Pressable>
		</View>
	)
}

const SignIn = () => {
	const [signIn] = useSignIn();
	const onSubmit = async (values) => {
		const { username, password } = values;

		try {
			const { data } = await signIn({ username, password });
			console.log('Sign in successful');
		} catch (error) {
			console.log('Sign in error:', error);
		}
};

	return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;
