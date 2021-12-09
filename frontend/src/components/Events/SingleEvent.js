import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getSingleEvent, removeEvent } from '../../store/event'
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
            <button
                className='get-ticket-button'
                // className={"like-button" + (produce.liked ? " selected" : "")}
                // onClick={() => dispatch(toggleLike(produce.id))}
            >
                Get Ticket!
            </button>

        </>
      );
    }

    return (
        <>
            <h2>{event?.title}</h2>
            {sessionLinks}
            <br/>
            <img src={event?.image} style={{height: '500px'}}></img>
            <br/>
            <p>Location: {event?.location}</p>
            <p>When: {event?.datetime}</p>
            <p>About: {event?.summary}</p>
            <p>Hosted by: {event?.hostId}</p>
        </>
    )
}
