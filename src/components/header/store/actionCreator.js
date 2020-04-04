import * as actionType from './actionType.js';

export const handleClick = (item) => {
	return {
		type: actionType.HANDLE_CLICK,
		item:item
    }
}

export const searchFilm = (value) => {
	return {
		type: actionType.SEARCH_FILM,
		value:value
    }
}