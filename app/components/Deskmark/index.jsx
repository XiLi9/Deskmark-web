import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../../actions'
import './style.scss';

// 新建按钮
import CreateBar from '../CreateBar';
// 左侧文章列表
import List from '../List';
// 右侧文章内容
import ItemShowLayer from '../ItemShowLayer';
// 编辑文章
import ItemEditor from '../ItemEditor';

const propTypes = {
	state: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired,
}

let Deskmark = React.createClass({
	componentDidMount() {
		// 获取所有的文章列表
		this.props.actions.fetchEntryList();
	},

	render(){
		const {state, actions} = this.props;
		const {isEditing, selectedId} = state.editor;
		const items = state.items;
		// 右侧要展现的文章 返回的是符合条件的元素
		const item = items.find(
				({id}) => id === selectedId
			);

		const mainPart = isEditing 
			? (
				<ItemEditor item={item} onSave={actions.saveEntry} onCancel={actions.cancelEdit}/>
			)
			:(
				<ItemShowLayer item={item} onEdit={actions.editEntry} onDelete={actions.deleteEntry}/>
			);
		return (
				<section className="deskmark-component">
					<nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
						<a className="navbar-brand" href="#">Deskmark App</a>
					</nav>
					<div className='container'>
						<div className="row">
							<div className="col-md-4 list-group">
								<CreateBar onClick={actions.createNewEntry} />
								<List items={items} onSelect={actions.selectEntry} />
							</div>
							{mainPart}
						</div>
					</div>
				</section>
			);
	}
});

Deskmark.propTypes = propTypes;

export default Deskmark;

// export default connect(
// 	state => ({state}),
// 	dispatch => ({
// 		actions: bindActionCreators(actionCreators, dispatch),
// 	})
// )(Deskmark);