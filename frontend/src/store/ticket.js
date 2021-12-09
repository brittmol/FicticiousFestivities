import { csrfFetch } from './csrf';

/* ----- ACTIONS ------ */
const LOAD = 'ticket/LOAD'
export const load = (tickets) => {
  return {
    type: LOAD,
    tickets
  }
}


/* ------ THUNK ------ communicates to backend api and retrieves it */
export const getTickets = () => async (dispatch) => {
  const response = await csrfFetch(`/api/mytickets`)

  if (response.ok) {
    const tickets = await response.json();
    dispatch(load(tickets))    // this is the action that is passed into the reduces
  }
}

/* ------ REDUCER ------ */

const initialState = {}
export default function ticketReducer(state = initialState, action) {
    switch (action.type) {
      case LOAD: {
        // const allTickets ={ event: action.tickets.length }
        const allTickets = {};
        action.tickets.forEach(ticket => {
          allTickets[ticket.eventId] = ticket;
        });
        return allTickets
      }
      default:
        return state;
    }
  }
