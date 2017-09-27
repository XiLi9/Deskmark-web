import React, {PropTypes} from 'react';
import ListItem from '../ListItem';
import './style.scss'

const propTypes = {
	items: PropTypes.array.isRequired,
	onSelect: PropTypes.func.isRequired,
}

function List({items, onSelect}){
	const itemsContent = items.map(
		item => {
			return <ListItem item={item} onClick={() => onSelect(item.id)} key={item.id}/>
		}
	);

	return (
			<div className="list-component">
				{itemsContent}
			</div>
		)
}

List.propTypes = propTypes;

export default List;