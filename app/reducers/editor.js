/*
	编辑状态的更新逻辑操作
*/

import * as ActionTypes from '../actions';

const initialState = {
	selectedId: null,
	isEditing: false,
}

export default function editor(state = initialState, action){
	switch(action.type){
		case ActionTypes.SELECT_ENTRY:
			return Object.assign({}, state, {selectedId: action.id});
		case ActionTypes.CREATE_NEW_ENTRY:
			return Object.assign({}, state, {selectedId: null, isEditing: true});
		case ActionTypes.EDIT_ENTRY:
			return Object.assign({}, state, {selectedId: action.id, isEditing: true});
		case ActionTypes.CANCEL_EDIT:
			return Object.assign({}, state, {isEditing: false});
		case ActionTypes.UPDATE_SAVED_ENTRY:
			return Object.assign({}, state, {selectedId: action.id, isEditing: false});
		case ActionTypes.FINISH_DELETE_ENTRY:
			return Object.assign({}, state, {selectedId: null, isEditing: false});
		default:
			return initialState;
	}
}