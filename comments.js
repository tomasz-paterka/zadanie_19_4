import {ADD_COMMENT} from './actions';
import {REMOVE_COMMENT} from './actions';
import {EDIT_COMMENT} from './actions';
import {THUMB_UP_COMMENT} from './actions';
import {THUMB_DOWN_COMMENT} from './actions';


const initialState = {
	comments: [],
	users: []
};


export function comments(state = [], action) {
	switch(action.type) {
		case ADD_COMMENT:
			return [{
				id: action.id,
				text: action.text,
				thumbUp: 0,
				thumbDown: 0
			}, ...state.comments];
		case REMOVE_COMMENT:
			return state.comments.filter(comment => comment.id !== action.id);
		case EDIT_COMMENT:
			return state.comments.map(comment => {
				if (comment.id === action.id) {
					return {...comment, text: action.text};
				} 
				return comment;	
			});
		case THUMB_UP_COMMENT:
			return state.comments.map(comment => {
				if (comment.id === action.id) {
					return (...comment, thumbUp: comment.thumbUp++);
				}
				return comment;	
			});
		case THUMB_DOWN_COMMENT:
			return state.comments.map(comment => {
				if (comment.id === action.id) {
					return (...comment, thumbDown: comment.thumbDown++);
				}
				return comment;	
			});	
		default:
			return state;
	}
}
