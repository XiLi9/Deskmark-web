/*
	文章信息的更新逻辑操作
*/

import {UPDATE_ENTRY_LIST} from '../actions'

// redux的初始状态
const initialState = [];

export default function items(state = initialState, action){
	switch(action.type){
		case UPDATE_ENTRY_LIST:
			return action.items;
		default:
			return state;
	}
}