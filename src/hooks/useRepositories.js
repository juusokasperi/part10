import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (orderBy, orderDirection) => {
		const { data, ...result } = useQuery(GET_REPOSITORIES, {
			fetchPolicy: 'cache-and-network',
			variables: { orderBy, orderDirection }
		});

	return { repositories: data ? data.repositories : undefined, ...result };
};

export default useRepositories;
