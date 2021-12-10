import { useSelector, useDispatch } from 'react-redux';
import { getTickets } from '../../store/ticket'
import { getEvents } from '../../store/event'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
                <div>
                    <li>
                        userId = {ticket.userId}
                    </li>
                    <li>
                        eventId = {ticket.eventId}
                    </li>
                    <li>
                        {eventsArr[ticket.eventId -1].title}
                    </li>
                    <li>
                        <Link to={`/events/${ticket.eventId}`}>
                            <img src={eventsArr[ticket.eventId -1].image} style={{height: '200px'}}></img>
                        </Link>
                    </li>
                </div>
                ))}
            </ul>
        </>
    )
}
