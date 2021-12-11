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
        <main style={{marginTop: '120px'}}>
            <h2 className='page-title'>All My Tickets</h2>
            {/* <h2>User: {sessionUser?.username}</h2> */}
            <section className='cards'>
                {ticketsArr?.map((ticket) => (
                    <Link to={`/events/${ticket?.eventId}`} style={{ textDecoration: 'none' }}>
                        <div className='event-card'>
                            <div className='card_title'>
                                {events[ticket?.eventId]?.title}
                            </div>
                            <div className='card_img-container'>
                                <img src={events[ticket?.eventId]?.image} style={{height: '200px'}}></img>
                            </div>
                            <button
                                className='remove-ticket-button'
                                style={{marginTop:'15px'}}
                                onClick={() => {
                                    dispatch(removeTicket(ticket?.eventId))
                                    history.push('/mytickets')
                                }}
                            >
                                <i className="fas fa-trash-alt" />
                                Remove Ticket
                            </button>
                        </div>
                    </Link>
                ))}
            </section>
        </main>
    )
}
