import { useSelector, useDispatch } from 'react-redux';
import { getTickets } from '../../store/ticket'
import { getEvents } from '../../store/event'
import { useEffect } from 'react';
// import { Link } from 'react-router-dom';

export default function MyTickets() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTickets())
    }, [])

    useEffect(() => {
        dispatch(getEvents())
    }, [])

    const tickets = useSelector(store => store.ticketReducer);
    const ticketsArr = Object.values(tickets);

    const events = useSelector(store => store.eventReducer);
    const eventsArr = Object.values(events);

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
                    ---------------
                    event title = {eventsArr[ticket.eventId].title}
                </li>
                ))}
            </ul>
        </>
    )
}
