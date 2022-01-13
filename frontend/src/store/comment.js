import { csrfFetch } from './csrf';

/* ----- ACTIONS ------ */
const LOAD = 'comment/LOAD'
export const load = (comments) => {
  return {
    type: LOAD,
    comments
  }
}

// const LOAD_ONE = 'comment/LOAD_ONE'
// export const loadOne = (comment) => {
//   return {
//     type: LOAD_ONE,
//     comment
//   }
// }

const ADD_COMMENT = 'comment/ADD_COMMENT'
export const addComment = (newComment) => {
  return {
    type: ADD_COMMENT,
    newComment
  }
}

const DELETE_COMMENT = 'comment/DELETE_COMMENT'
export const deleteComment = (comment) => {
  return {
    type: DELETE_COMMENT,
    comment
  }
}

/* ------ THUNK ------ communicates to backend api and retrieves it */
export const getComments = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/events/${id}/comments`)

  if (response.ok) {
    const comments = await response.json();
    dispatch(load(comments))    // this is the action that is passed into the reduces
  }
}

// export const getSingleComment = (commentId) => async (dispatch) => {
//   const response = await csrfFetch(`/api/events/${id}/comments/${commentId}`)

//   if (response.ok) {
//     const comment = await response.json();
//     dispatch(loadOne(comment))
//   }
// }

export const createComment = (data) => async (dispatch) => {
  // console.log(data)
  const response = await csrfFetch(`/api/events/${data.eventId}/comments`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  if (response.ok) {
    const newComment = await response.json();
    dispatch(addComment(newComment))
    return newComment;
  }
}

export const updateComment = (data) => async (dispatch) => {
  const response = await csrfFetch(`/api/events/${data.eventId}/comments/${data.id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (response.ok) {
    const newComment = await response.json();
    dispatch(addComment(newComment));
    return newComment;
  }
}

export const removeComment = (data) => async (dispatch) => {
  const response = await csrfFetch(`/api/events/${data.eventId}/comments/${data.id}`, {
    method: 'delete'
  });

  if (response.ok) {
    const comment = await response.json();
    dispatch(deleteComment(comment));
  }
}

/* ------ REDUCER ------ */

const initialState = {}
export default function commentReducer(state = initialState, action) {
    switch (action.type) {
      case LOAD: {
        const allComments = {};
        action.comments.forEach(comment => {
          allComments[comment.id] = comment;
        });
        return allComments
      }
      // case LOAD_ONE: {
      //     const newState = {
      //       ...state,
      //       [action.comment.id]: action.comment
      //     };
      //     return newState;
      // }
      case ADD_COMMENT: {
          const newState = {
            ...state,
            [action.newComment.id]: action.newComment
          };
          return newState;
      }
      case DELETE_COMMENT: {
        const newState = { ...state };
        // console.log('DELETE action.comment', action.comment)
        delete newState[action.comment.comment.id];
        return newState;
      }
      default:
        return state;
    }
  }
