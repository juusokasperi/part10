import { FlatList, Pressable, View, StyleSheet } from 'react-native';
import RepositoryItem from "./RepositoryItem";
import useRepositories from '../hooks/useRepositories';
import HeaderComponent from './HeaderComponent/HeaderComponent';
import { useNavigate } from 'react-router-native';
import { useState } from 'react';

const styles = StyleSheet.create({
	separator: {
		height: 10,
	},
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, onOrderChange, orderBy }) => {
	const repositoryNodes = repositories
		? repositories.edges.map(edge => edge.node)
		: [];

	const navigate = useNavigate();

	return (
		<FlatList
			data={repositoryNodes}
			ListHeaderComponent={() => <HeaderComponent onOrderChange={onOrderChange} orderBy={orderBy}/>}
			ItemSeparatorComponent={ItemSeparator}
			renderItem={({item}) => (
				<Pressable onPress={() => navigate(`/repositories/${item.id}`)}>
					<RepositoryItem data={item} />
				</Pressable>
				)}
		/>
	);
}

const RepositoryList = () => {
	const [orderBy, setOrderBy] = useState({ label: 'Latest repositories', value: 'CREATED_AT', dir: 'DESC'});
	const { repositories } = useRepositories(orderBy.value, orderBy.dir);

	const handleOrder = (newOrder) => {
		setOrderBy(newOrder);
	};

	return <RepositoryListContainer
		repositories={repositories}
		onOrderChange={handleOrder}
		orderBy={orderBy} />;
};

export default RepositoryList;
