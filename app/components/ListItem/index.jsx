import React, {PropTypes} from "react";
import './style.scss'

const propTypes = {
	item: PropTypes.object.isRequired,
	onClick: PropTypes.func.isRequired
};

function ListItem({item, onClick}){
	let formatTime = "Unknown Time";
	if(item.time){
		formatTime = new Date(item.time).toISOString().match(/(\d{4}-\d{2}-\d{2})/)[1];
	}

	return (
			<a className="list-group-item item-component" href="#" onClick={onClick}>
				<span className="label label-default label-pill label-xs-right">
					{formatTime}
				</span>
				{item.title}
			</a>
		);
}

ListItem.propTypes = propTypes;

export default ListItem;