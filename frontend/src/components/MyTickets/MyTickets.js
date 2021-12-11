import { useSelector, useDispatch } from 'react-redux';
import { getTickets, removeTicket } from '../../store/ticket'
import { getEvents } from '../../store/event'
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../Events/Events.css'

export default function MyTickets() {
    const dispatch = useDispatch()
    const history = useHistory();

    useEffect(() => {
        dispatch(getTickets())
    }, [])

    useEffect(() => {
        dispatch(getEvents())
    }, [])

    const sessionUser = useSelector(state => state.session.user);

    const tickets = useSelector(store => store.ticketReducer);
    const ticketsArr = Object.values(tickets);

    const events = useSelector(store => store.eventReducer);

    console.log('ticketsArr =', ticketsArr)
    return (
        <main>
            <h2>All My Tickets</h2>
            <h2>User: {sessionUser?.username}</h2>
            <ul>
            {ticketsArr?.map((ticket) => (
                <div className='event-card'>
                    <li>
                        userId = {ticket?.userId}
                    </li>
                    <li>
                        eventId = {ticket?.eventId}
                    </li>
                    <li>
                        {events[ticket?.eventId]?.title}
                    </li>
                    <li>
                        <Link to={`/events/${ticket?.eventId}`}>
                            <img src={events[ticket?.eventId]?.image} style={{height: '200px'}}></img>
                        </Link>
                    </li>
                    <li>
                    <button
                        className='remove-ticket-button'
                        onClick={() => {
                            dispatch(removeTicket(ticket?.eventId))
                            history.push('/mytickets')
                        }}
                    >
                        <i className="fas fa-ticket-alt" />
                        Remove Ticket!
                    </button>
                    </li>
                </div>
                ))}
            </ul>
        </main>
    )
}
