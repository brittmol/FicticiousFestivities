import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleEvent } from '../../store/event'
import { useEffect } from 'react';
// import EditEventForm from './EditEventForm';


export default function SingleEvent() {
    const { eventId } = useParams();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSingleEvent(eventId))
    }, [dispatch, eventId])

    const event = useSelector(store => store.eventReducer[eventId]);
    // console.log('event =', event)

    const sessionUser = useSelector(state => state.session.user);
    // console.log('sessionUser', sessionUser?.id)
    // console.log('event.hostId', event?.hostId)
    // console.log('do they equal?', sessionUser?.id === event?.hostId)

    let sessionLinks;
    if (sessionUser && sessionUser?.id === event?.hostId) {
      sessionLinks = (
        <>
            <button>Edit Event</button>
        </>
      );
    }

    return (
        <>
            <h2>{event?.title}</h2>
            {sessionLinks}
        </>
    )
}
