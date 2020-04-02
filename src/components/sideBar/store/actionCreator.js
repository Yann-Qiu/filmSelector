import * as actionType from './actionType.js';



export const handleClickBar = (item) => {
	return {
		type: actionType.HANDLE_CLICK_BAR,
		item:item
	}
}

export const addList = (item) => {
	return {
		type: actionType.ADD_LIST,
		item:item
	}
}

export const deleteList = (item) => {
	return {
		type: actionType.DELETE_LIST,
		item:item
	}
}

export const  updateList = () => {
	return {
		type: actionType.UPDATE_LIST,
	}
}