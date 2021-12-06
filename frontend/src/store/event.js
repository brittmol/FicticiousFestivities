import { csrfFetch } from './csrf';

/* ----- ACTIONS ------ */
const LOAD = 'event/LOAD'
export const load = (events) => {
    return {
      type: LOAD,
      events
    }
  }

/* ------ Fetch? ------ */
export const getEvents = () => async (dispatch) => {
    const response = await csrfFetch(`/api/events`)

    if (response.ok) {
        const list = await response.json();
        dispatch(load(list))
    }
}

/* ------ REDUCER ------ */

const initialState = {}
export default function produceReducer(state = initialState, action) {
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
