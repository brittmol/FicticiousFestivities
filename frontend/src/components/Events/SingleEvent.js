import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getSingleEvent} from '../../store/event'
import { getTickets, createTicket, removeTicket } from '../../store/ticket'
import { useEffect } from 'react';
import EditEventFormModal from './EditEventFormModal'


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
    console.log('tickets ===', tickets)
    console.log('tickets[eventId]', tickets[eventId])
    console.log('sessionUser.id', sessionUser.id)
    let ticketButton;
    if (tickets[eventId]) {
        ticketButton = (
            <>
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
    } else {
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
            {/* <button
                className='get-ticket-button'
                onClick={() => {
                    dispatch(createTicket(sessionUser.id, eventId))
                    history.push('/mytickets')
                }}
                // className={"like-button" + (produce.liked ? " selected" : "")}
                // onClick={() => dispatch(toggleLike(produce.id))}
            >
                Get Ticket!
            </button>
            <button
                className='get-ticket-button'
                onClick={() => {
                    dispatch(removeTicket(eventId))
                    history.push('/mytickets')
                }}
            >
                Remove Ticket!
            </button> */}
            <div style={{border: '5px lightgray solid', width: '1000px', padding: '20px', margin: '20px', backgroundColor: 'lightgray'}}>
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
