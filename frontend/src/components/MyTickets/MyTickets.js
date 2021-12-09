import { useSelector, useDispatch } from 'react-redux';
import { getTickets } from '../../store/ticket'
import { useEffect } from 'react';
// import { Link } from 'react-router-dom';

export default function MyTickets() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTickets())
    }, [])

    const tickets = useSelector(store => store.ticketReducer);
    const ticketsArr = Object.values(tickets);
    console.log('ticketsArr =', ticketsArr)
    return (
        <>
            <h2>All Tickets</h2>
            <ul>
            {ticketsArr?.map((ticket) => (
                <li>
                    userId = {ticket.userId}
                    ---------------
                    eventId = {ticket.eventId}
                </li>
                ))}
            </ul>
        </>
    )
}
