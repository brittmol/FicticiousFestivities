import { csrfFetch } from './csrf';

/* ----- ACTIONS ------ */
const LOAD = 'event/LOAD'
export const load = (events) => {
  return {
    type: LOAD,
    events
  }
}

const ADD_EVENT = 'event/ADD_EVENT'
export const addEvent = (newEvent) => {
  return {
    type: ADD_EVENT,
    newEvent
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

export const createEvent = (data) => async (dispatch) => {
  console.log(data)
  const response = await csrfFetch(`/api/events/new`, {
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

export const updatedEvent = (data) => async (dispatch) => {
  const response = await csrfFetch(`/api/events/${data.id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (response.ok) {
    const updatedEvent = await response.json();
    dispatch(addEvent(updatedEvent));
    return updatedEvent;
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
      case ADD_EVENT: {
        if (!state[action.newEvent.id]) {
          const newState = {
            ...state,
            [action.newEvent.id]: action.newEvent
          };
          return newState;
        }
        // return {
        //   ...state,
        //   [action.newEvent.id]: {
        //     ...state[action.newEvent.id],
        //     ...action.newEvent
        //   }
        // };
      }
      default:
        return state;
    }
  }
