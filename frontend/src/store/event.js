import { csrfFetch } from './csrf';

/* ----- ACTIONS ------ */
const LOAD = 'event/LOAD'
export const load = (events) => {
  return {
    type: LOAD,
    events
  }
}

const LOAD_ONE = 'event/LOAD_ONE'
export const loadOne = (event) => {
  return {
    type: LOAD_ONE,
    event
  }
}

const ADD_EVENT = 'event/ADD_EVENT'
export const addEvent = (newEvent) => {
  return {
    type: ADD_EVENT,
    newEvent
  }
}

const DELETE_EVENT = 'event/DELETE_EVENT'
export const deleteEvent = (event) => {
  return {
    type: DELETE_EVENT,
    event
  }
}

/* ------ THUNK ------ communicates to backend api and retrieves it */
export const getEvents = () => async (dispatch) => {
  const response = await csrfFetch(`/api/events`)

  if (response.ok) {
    const events = await response.json();
    dispatch(load(events))    // this is the action that is passed into the reduces
  }
}

export const getSingleEvent = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/events/${id}`)

  if (response.ok) {
    const event = await response.json();
    dispatch(loadOne(event))
  }
}

export const createEvent = (data) => async (dispatch) => {
  console.log(data)
  const response = await csrfFetch(`/api/events`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  if (response.ok) {
    const newEvent = await response.json();
    dispatch(addEvent(newEvent))
    return newEvent;
  }
}

export const updateEvent = (data) => async (dispatch) => {
  const response = await csrfFetch(`/api/events/${data.id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (response.ok) {
    const newEvent = await response.json();
    dispatch(addEvent(newEvent));
    return newEvent;
  }
}

export const removeEvent = (data) => async (dispatch) => {
  const response = await csrfFetch(`/api/events/${data.id}`, {
    method: 'delete'
  });

  if (response.ok) {
    const event = await response.json();
    dispatch(deleteEvent(event));
  }
}

/* ------ REDUCER ------ */

const initialState = {}
export default function eventReducer(state = initialState, action) {
    switch (action.type) {
      case LOAD: {
        const allEvents = {};
        action.events.forEach(event => {
          allEvents[event.id] = event;
        });
        return allEvents
      }
      case LOAD_ONE: {
          const newState = {
            ...state,
            [action.event.id]: action.event
          };
          return newState;
      }
      case ADD_EVENT: {
          const newState = {
            ...state,
            [action.newEvent.id]: action.newEvent
          };
          return newState;
      }
      case DELETE_EVENT: {
        const newState = { ...state };
        delete newState[action.event];
        return newState;
      }
      default:
        return state;
    }
  }
