/*
	redux 的所有 action
*/

import * as storage from '../utils/index'

export const SELECT_ENTRY = "SELECT_ENTRY";
export const CREATE_NEW_ENTRY = "CREATE_NEW_ENTRY";
export const EDIT_ENTRY = "EDIT_ENTRY";
export const CANCEL_EDIT = "CANCEL_EDIT";

// 选择文档
export function selectEntry(id){
	return {
		type: SELECT_ENTRY,
		id
	};
}

// 创建新的文档
export function createNewEntry(){
	return {
		type: CREATE_NEW_ENTRY
	};
}

// 编辑文档
export function editEntry(id){
	return {
		type: EDIT_ENTRY,
		id
	}
}

// 取消编辑操作
export function cancelEdit(){
	return {
		type: CANCEL_EDIT
	};
}

// 更新文档列表
export const UPDATE_ENTRY_LIST = "UPDATE_ENTRY_LIST";

function updateEntryList(items){
	console.log(items);
	return {
		type: UPDATE_ENTRY_LIST,
		items
	};
}

// 加载文档列表      redux-thunk
// 异步操作
export function fetchEntryList(){
	return dispatch => {
		storage.getAll()
			.then(items => dispatch(updateEntryList(items)));
	};
}

// 删除文档
export function deleteEntry(id){
	return dispatch => {
		storage.deleteEntry(id)
			.then(() => storage.getAll())
			.then((items) => {
				dispatch(updateEntryList(items))})
	};
}

export const UPDATE_SAVED_ENTRY = "UPDATE_SAVED_ENTRY";

function updateSaveEntry(id){
	return {
		type: UPDATE_SAVED_ENTRY,
		id
	};
}

// 保存文档
export function saveEntry(item){
	const {title, id, content} = item;
	return dispatch => {
		if(id){
			// 更新文档
			storage.updateEntry(id, title, content)
				.then(() => dispatch(updateSaveEntry(id)))
				.then(() => storage.getAll())
				.then(items => dispatch(updateEntryList(items)));
		}else{
			// 创建文档
			storage.insertEntry(title, content)
				.then(inserted => dispatch(updateSaveEntry(inserted.id)))
				.then(() => storage.getAll())
				.then(items => dispatch(updateEntryList(items)));
		}
	};
}


