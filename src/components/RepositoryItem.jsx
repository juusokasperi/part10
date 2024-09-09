import { View, StyleSheet, Image } from 'react-native';
import Text from "./Text";
import theme from '../theme';

const formatCount = (count) => {
	if (count >= 1000000) {
		return `${(count / 1000000).toFixed(1)}m`;
	}
	else if (count >= 1000) {
		return `${(count / 1000).toFixed(1)}k`;
	}
	return count.toString();
}

const styles = StyleSheet.create({
	flexContainer: {
		padding: 10,
		gap: 5,
		backgroundColor: theme.colors.repositoryBg,
	},
	flexRow: {
		flexDirection: 'row',
	},
	flexColumn: {
		flexShrink: 1,
		flex: 1,
		flexDirection: 'column',
	},
	image: {
		width: 60,
		height: 60,
		marginRight: 10,
		borderRadius: 5,
	},
	languageContainer: {
		backgroundColor: theme.colors.primary,
		borderRadius: 5,
		marginTop: 4,
		padding: 5,
		alignSelf: 'flex-start',
	},
})

const BasicInfo = ({ data }) => (
	<View style={styles.flexRow}>
		<Image source={{ uri: data.ownerAvatarUrl }} style={styles.image} />
		<View style={styles.flexColumn}>
			<Text fontSize="subheading" fontWeight="bold" >{data.fullName}</Text>
			<Text>{data.description}</Text>
			<View style={styles.languageContainer}>
					<Text color="textInvert">{data.language}</Text>
			</View>
		</View>
	</View>
)

const DetailedInfo = ({ data }) => (
	<View style={styles.flexRow}>
		<View style={styles.flexColumn}>
			<Text fontSize="subheading" fontWeight="bold">{formatCount(data.stargazersCount)}</Text>
			<Text>Stars</Text>
		</View>
		<View style={styles.flexColumn}>
			<Text fontSize="subheading" fontWeight="bold">{formatCount(data.forksCount)}</Text>
			<Text>Forks</Text>
		</View>
		<View style={styles.flexColumn}>
			<Text fontSize="subheading" fontWeight="bold">{formatCount(data.reviewCount)}</Text>
			<Text>Reviews</Text>
		</View>
		<View style={styles.flexColumn}>
			<Text fontSize="subheading" fontWeight="bold">{formatCount(data.ratingAverage)}</Text>
			<Text>Rating</Text>
		</View>
	</View>
)

const RepositoryItem = ({ data }) => (
	<View style={styles.flexContainer}>
		<BasicInfo data={data} />
		<DetailedInfo data={data} />
	</View>
);

export default RepositoryItem;
