import { useQuery } from '@apollo/client';

import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (id) => {
	const { data, loading, error, ...result } = useQuery(GET_REPOSITORY, {
		fetchPolicy: 'cache-and-network',
		variables: { repositoryId: id },
	});

	return { repository: data ? data.repository : undefined,
		loading,
		error,
		...result };
};

export default useRepository;
