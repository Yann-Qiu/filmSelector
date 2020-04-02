import * as actionType from './actionType.js';


export const handeleDislike = (catalogue) => {
	return {
        type: actionType.HANDLE_DISLIKE,
        catalogue
	}
}

export const filterList = () => {
	return {
        type: actionType.FILTER_LIST
	}
}

export const onChangeDisplay = (displayNumber) => {
	return {
		type: actionType.ON_CHANGE_DISPLAY,
		displayNumber : displayNumber 
	}
}

export const changePage = (pageNumber) => {
	return {
		type: actionType.CHANGE_PAGE,
		pageNumber : pageNumber 
	}
}