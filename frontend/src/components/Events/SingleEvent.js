import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getSingleEvent} from '../../store/event'
import { getTickets, createTicket, removeTicket } from '../../store/ticket'
import { useEffect } from 'react';
import EditEventFormModal from './EditEventFormModal'
import './Events.css'

export default function SingleEvent() {
    const { eventId } = useParams();
    const dispatch = useDispatch()
    const history = useHistory();

    useEffect(() => {
        dispatch(getSingleEvent(eventId))
    }, [dispatch, eventId])

    useEffect(() => {
        dispatch(getTickets())
    }, [])

    const event = useSelector(store => store.eventReducer[eventId]);
    const sessionUser = useSelector(state => state.session.user);
    const tickets = useSelector(store => store.ticketReducer);
    // console.log('tickets[eventId]', tickets[eventId]?.userId)
    // console.log('sessionUser', sessionUser?.id)
    // console.log(sessionUser.id === tickets[eventId]?.userId)
    let ticketButton;
    if (tickets[eventId] && sessionUser?.id === tickets[eventId]?.userId) {
        ticketButton = (
            <>
                <button
                    className='get-ticket-button'
                >
                    <i className="fas fa-ticket-alt" />
                    <i className="fas fa-user-check" />
                </button>
                <button
                    className='remove-ticket-button'
                    onClick={() => {
                        dispatch(removeTicket(eventId))
                    }}
                >
                    <i className="fas fa-ticket-alt" />
                    Remove Ticket!
                </button>
            </>
        )
    } else if (sessionUser) {
        ticketButton = (
            <button
                className='get-ticket-button'
                onClick={() => {
                    dispatch(createTicket(sessionUser.id, eventId))
                }}
            >
                <i className="fas fa-ticket-alt" />
                Get Ticket!
            </button>
        )
    }


    let sessionLinks;
    if (sessionUser && sessionUser?.id === event?.hostId) {
      sessionLinks = (
        <>
            <EditEventFormModal user={sessionUser} event={event}/>
        </>
      );
    }

    return (
        <main>
            <h2>{event?.title}</h2>
            <div>
                {sessionLinks}
                {ticketButton}
            </div>
            <div className='event-card-single'>
                <br/>
                <img src={event?.image} style={{height: '500px'}}></img>
                <br/>
                <p>Location: {event?.location}</p>
                <p>When: {event?.datetime}</p>
                <p>About: {event?.summary}</p>
                <p>Hosted by: {event?.hostId}</p>
            </div>
        </main>
    )
}
