import './style.scss';

import React,{PropTypes, Component} from 'react';

// 编辑/新建文档 
const propTypes = {
	item: PropTypes.object,
	onSave: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired
};

class ItemEditor extends Component{
	render(){
		const {onSave, onCancel} = this.props;
		const item = this.props.item || {
			title: '',
			content: '',
		};

		let saveText = item.id ? "Save" : "Create";

		let save = () => {
			onSave({
				...item,
				title: this.refs.title.value,
				content: this.refs.content.value,
			});
		};

		return (
				<div className="col-md-8 item-editor-component">
					<div className="control-area">
						<button onClick={save} className="btn btn-success">{saveText}</button>
						<button onClick={onCancel} className="btn secondary">Cancel</button>
					</div>
					<div className="edit-area">
						<input ref="title" placeholder="Please Input Title" defaultValue={item.title}/>
						<textarea ref="content" placeholder="Please Input Content" defaultValue={item.content}/>
					</div>
				</div>
			)
	}
}

ItemEditor.propTypes = propTypes;

export default ItemEditor;