import uuid from uuid;

export const ADD_COMMENT = 'ADD_COMMENT',
	REMOVE_COMMENT = 'REMOVE_COMMENT',
	EDIT_COMMENT = 'EDIT_COMMENT',
	THUMB_UP_COMMENT = 'THUMB_UP_COMMENT',
	THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

{
	type: ADD_COMMENT,
	text: 'My first comment!',
	id: 20
}

{
	type: REMOVE_COMMENT,
	id: 20
}

{
	type: EDIT_COMMENT,
	text: 'Edited comment',
	id: 20
}

{
	type: THUMB_UP_COMMENT,
	thumbUp: 4,
	id: 20
}

{
	type: THUMB_DOWN_COMMENT,
	thumbDown: 2,
	id: 20
}

export function addComment(text) {
	return {
		type: ADD_COMMENT,
		text,
		id: uuid.v4()
	}
}
export const boundAddComment = text => dispatch(addComment(text));
boundAddComment('new comment');


export function removeComment(id) {
	return {
		type: REMOVE_COMMENT,
		id: id
	}
}
export const boundRemoveComment = id => dispatch(removeComment(id));
boundRemoveComment(id);


export function editComment(id, text) {
	return {
		type: EDIT_COMMENT,
		text,
		id: id
	}
}
export const boundEditComment = (id, text) => dispatch(editComment(id, text));
boundEditComment(id, 'edited comment');


export function thumbUpComment(id, thumbUp) {
	return {
		type: THUMB_UP_COMMENT,
		thumbUp: thumbUp++,
		id: id
	}
}
export const boundThumbUp = (id, thumbUp) => dispatch(thumbUpComment(thumbUp, id));
boundThumbUp(id, thumbUp);


export function thumbDownComment(id, thumbDown) {
	return {
		type: THUMB_DOWN_COMMENT,
		thumbDown: thumbDown++,
		id: id
	}
}
export const boundThumbDown = (id, thumbDown) => dispatch(thumbDownComment(thumbDown, id));
boundThumbUp(id, thumbDown);