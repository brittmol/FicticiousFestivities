import { csrfFetch } from './csrf';

/* ----- ACTIONS ------ */
const LOAD = 'event/LOAD'
export const load = (events) => {
    return {
      type: LOAD,
      events
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
      default:
        return state;
    }
  }
