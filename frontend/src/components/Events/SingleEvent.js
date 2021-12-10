import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getSingleEvent} from '../../store/event'
import { createTicket } from '../../store/ticket'
import { useEffect } from 'react';
import EditEventFormModal from './EditEventFormModal'


export default function SingleEvent() {
    const { eventId } = useParams();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSingleEvent(eventId))
    }, [dispatch, eventId])

    const event = useSelector(store => store.eventReducer[eventId]);
    const sessionUser = useSelector(state => state.session.user);

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
            {sessionLinks}
            <button
                className='get-ticket-button'
                onClick={() => dispatch(createTicket(sessionUser.id, eventId))}
                // className={"like-button" + (produce.liked ? " selected" : "")}
                // onClick={() => dispatch(toggleLike(produce.id))}
            >
                Get Ticket!
            </button>
            <br/>
            <img src={event?.image} style={{height: '500px'}}></img>
            <br/>
            <p>Location: {event?.location}</p>
            <p>When: {event?.datetime}</p>
            <p>About: {event?.summary}</p>
            <p>Hosted by: {event?.hostId}</p>
        </main>
    )
}
