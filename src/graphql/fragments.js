import { gql } from '@apollo/client';

export const REPOSITORY_BASE_FIELDS = gql`
	fragment repositoryBaseFields on Repository {
		id
		name
		ownerName
		fullName
		stargazersCount
		forksCount
		url
		ownerAvatarUrl
		description
		language
		createdAt
	}
`;

export const REVIEW_FIELDS = gql`
	fragment reviewFields on Repository {
		reviews {
			edges {
				node {
					user {
						username
					}
					rating
					text
					createdAt
				}
			}
		}
	}
`;

export const USER_BASE_FIELDS = gql`
	fragment userBaseFields on User {
		id
		username
		createdAt
	}
`;
