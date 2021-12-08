import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getSingleEvent, removeEvent } from '../../store/event'
import { useEffect } from 'react';
import EditEventFormModal from './EditEventFormModal'


export default function SingleEvent() {
    const { eventId } = useParams();
    const dispatch = useDispatch()
    const history = useHistory();

    useEffect(() => {
        dispatch(getSingleEvent(eventId))
    }, [dispatch, eventId])

    const event = useSelector(store => store.eventReducer[eventId]);

    // const onSubmit = (e) => {
    //     e.preventDefault()
    //     window.alert(
    //         "Are you sure you would like to Delete this event?"
    //     )
    //     dispatch(removeEvent(event))
    //     history.push(`/events`)
    // }

    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser && sessionUser?.id === event?.hostId) {
      sessionLinks = (
        <>
            <EditEventFormModal user={sessionUser} event={event}/>
            {/* <button onClick={() => {
                dispatch(removeEvent(event))
                history.push(`/events`)
            }}
                 >
                Delete Event
            </button> */}
            <button>
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
