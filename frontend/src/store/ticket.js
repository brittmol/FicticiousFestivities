import { csrfFetch } from './csrf';

/* ----- ACTIONS ------ */
const LOAD = 'ticket/LOAD'
export const load = (tickets) => {
  return {
    type: LOAD,
    tickets
  }
}

const ADD_TICKET = 'ticket/ADD_TICKET'
export const addTicket = (ticket) => {
  return {
    type: ADD_TICKET,
    ticket
  }
}

const DELETE_TICKET = 'ticket/DELETE_TICKET'
export const deleteTicket = (eventId) => {
  return {
    type: DELETE_TICKET,
    eventId
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

export const createTicket = (userId, eventId) => async (dispatch) => {
  const response = await csrfFetch(`/api/mytickets`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({userId, eventId})
  })

  if (response.ok) {
    const newTicket = await response.json();
    dispatch(addTicket(newTicket))
    return newTicket;
  }
}

export const removeTicket = (eventId) => async (dispatch) => {
  const response = await csrfFetch(`/api/mytickets/${eventId}`, {
    method: 'delete'
  });

  if (response.ok) {
    // don't need to await response because it is an empty object
    dispatch(deleteTicket(eventId));
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
      case ADD_TICKET: {
        const newState = {
          ...state,
          [action.ticket.eventId]: {
              ...action.ticket
          }
        };
        return newState;
      }
      case DELETE_TICKET: {
        const newState = { ...state };
        delete newState[action.eventId];
        return newState;
      }
      default:
        return state;
    }
  }
