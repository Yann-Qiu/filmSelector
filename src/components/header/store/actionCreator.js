import * as actionType from './actionType.js';

export const handleClick = (item) => {
	return {
		type: actionType.HANDLE_CLICK,
		item:item
    }
}