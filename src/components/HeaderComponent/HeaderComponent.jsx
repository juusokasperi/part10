import { View } from 'react-native';
import OrderBy from './OrderBy';

const HeaderComponent = ({onOrderChange, orderBy}) => {
	return (
		<View>
			<OrderBy onOrderChange={onOrderChange} orderBy={orderBy} />
		</View>
	)
}

export default HeaderComponent;
