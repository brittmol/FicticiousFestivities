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
export const addTicket = (userId, eventId) => {
  return {
    type: ADD_TICKET,
    userId,
    eventId
  }
}

const DELETE_TICKET = 'ticket/DELETE_TICKET'
export const deleteTicket = (ticket) => {
  return {
    type: DELETE_TICKET,
    ticket
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

export const createTicket = (data) => async (dispatch) => {
  console.log(data)
  const response = await csrfFetch(`/api/tickets`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  if (response.ok) {
    const newTicket = await response.json();
    dispatch(addTicket(newTicket))
    return newTicket;
  }
}

export const removeTicket = (data) => async (dispatch) => {
  const response = await csrfFetch(`/api/tickets/${data.id}`, {
    method: 'delete'
  });

  if (response.ok) {
    const ticket = await response.json();
    dispatch(deleteTicket(ticket));
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
          [action.eventId]: {
            ...state[action.eventId],
            userId: action.userId
          }
        };
        return newState;
      }
      case DELETE_TICKET: {
        const newState = { ...state };
        delete newState[action.ticket];
        return newState;
      }
      default:
        return state;
    }
  }
