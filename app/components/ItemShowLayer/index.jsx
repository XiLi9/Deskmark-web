import './style.scss';

import React, {Component, PropTypes} from 'react';
import marked from 'marked';

const propTypes = {
	item: PropTypes.object,
	onEdit: PropTypes.func,
	onDelete: PropTypes.func,
};

function ItemShowLayer({item, onEdit, onDelete}){
	if(!item || !item.id){
		return (
				<div className="col-md-8 item-show-layer-component">
					<div className="no-select">
						Please Select an Artical from left list
					</div>
				</div>
			);
	}

	const content = marked(item.content);

	/* dangerouslySetInnerHTML是react的一个属性。
	   不合时宜的使用 innerHTML 可能会导致 cross-site scripting (XSS) 攻击
	*/
	return (
			<div className="col-md-8 item-show-layer-component">
				<div className="control-area">
					<button	className="btn btn-primary" onClick={() => onEdit(item.id)}> Edit</button>
					<button className="btn btn-danger" onClick={() => onDelete(item.id)}> Delete </button>
				</div>
				<h2>{item.title}</h2>
				<div className="item-text">
					<div dangerouslySetInnerHTML={{__html: content}}/>
				</div>
			</div>
		);
}

ItemShowLayer.propTypes = propTypes;
export default ItemShowLayer;