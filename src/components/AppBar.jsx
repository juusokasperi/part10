import { View, ScrollView, Pressable, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';

import theme from '../theme';
import Text from "./Text";
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  appBar: {
    paddingTop: Constants.statusBarHeight,
	backgroundColor: theme.colors.appBar,
  },
  tab: {
	padding: 5,
  },
  flexRow: {
	flexDirection: 'row',
  },
});

const AppBarTab = ({ buttonName, link }) => (
		<Pressable>
			<Link to={link}>
			<Text style={styles.tab} fontWeight="bold" fontSize="subheading" color="textInvert">{buttonName}</Text>
			</Link>
		</Pressable>
	)

const AppBar = () => {
  const { data } = useQuery(ME);
  const isLoggedIn = data?.me;

  return (
  	<View style={styles.appBar}>
		<ScrollView horizontal style={styles.flexRow}>
		<AppBarTab buttonName="Repositories" link="/"/>
			{isLoggedIn ? (
				<AppBarTab buttonName="Sign out" link="/logout" />
			) : (
				<AppBarTab buttonName="Sign in" link="/login" />
			)}
		</ScrollView>
	</View>
  )
};

export default AppBar;
