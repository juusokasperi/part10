import { gql } from '@apollo/client';
import { REPOSITORY_BASE_FIELDS, USER_BASE_FIELDS, REVIEW_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
	query {
		repositories {
			edges {
				node {
					...repositoryBaseFields
					reviewCount
					ratingAverage
				}
			}
  		}
	}

	${REPOSITORY_BASE_FIELDS}
`;

export const ME = gql`
	query {
		me {
			...userBaseFields
		}
	}
	${USER_BASE_FIELDS}
`;

export const GET_REPOSITORY = gql`
	query Repository($repositoryId: ID!) {
		repository(id: $repositoryId) {
			...repositoryBaseFields
			reviewCount
			ratingAverage
			...reviewFields
		}
	}

	${REPOSITORY_BASE_FIELDS}
	${REVIEW_FIELDS}
`;
