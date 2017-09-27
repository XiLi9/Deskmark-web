import './style.scss';

import React, {PropTypes} from 'react';

/*
	无状态组件 SFC	
	新建文档按钮
*/

const propTypes = {
	onClick: PropTypes.func.isRequired,
};


function CreateBar({onClick}) {
	return (
			<a href = "#" onClick={onClick} className="list-group-item create-bar-component">
				+ Create New Actical
			</a>
		);
}
CreateBar.propTypes = propTypes;

/*或者使用ES5形式*/

// let CreateBar = React.createClass({
// 	render(){
// 		return (
// 				<a href = "#" onClick={this.propsonClick} className="list-group-item create-bar-component">
// 					+ Create New Actical
// 				</a>
// 			)
// 	}
// });



export default CreateBar;
