import { csrfFetch } from './csrf';

/* ----- ACTIONS ------ */
const LOAD = 'ticket/LOAD'
export const load = (tickets) => {
  return {
    type: LOAD,
    tickets
  }
}

// const DELETE_TICKET = 'ticket/DELETE_TICKET'
// export const deleteTicket = (ticket) => {
//   return {
//     type: DELETE_TICKET,
//     ticket
//   }
// }

/* ------ THUNK ------ communicates to backend api and retrieves it */
export const getTickets = () => async (dispatch) => {
  const response = await csrfFetch(`/api/mytickets`)

  if (response.ok) {
    const tickets = await response.json();
    dispatch(load(tickets))    // this is the action that is passed into the reduces
  }
}

// export const removeTicket = (data) => async (dispatch) => {
//   const response = await csrfFetch(`/api/mytickets/${data.id}`, {
//     method: 'delete'
//   });

//   if (response.ok) {
//     const ticket = await response.json();
//     dispatch(deleteTicket(ticket));
//   }
// }

/* ------ REDUCER ------ */

const initialState = {}
export default function ticketReducer(state = initialState, action) {
    switch (action.type) {
      case LOAD: {
        const allTickets = {};
        action.tickets.forEach(ticket => {
          allTickets[ticket.id] = ticket;
        });
        return allTickets
      }
      // case DELETE_TICKET: {
      //   const newState = { ...state };
      //   delete newState[action.ticket];
      //   return newState;
      // }
      default:
        return state;
    }
  }
