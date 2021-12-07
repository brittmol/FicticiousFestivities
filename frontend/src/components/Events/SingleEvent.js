import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleEvent } from '../../store/event'
import { useEffect } from 'react';


export default function SingleEvent() {
    const { eventId } = useParams();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSingleEvent(eventId))
    }, [dispatch, eventId])


    const event = useSelector(store => store.eventReducer);
    // console.log('event =', event)
    // console.log('event?[eventId] =', event[eventId])

    return (
        <>
            {/* <h2>{event.title}</h2> */}
            <h2>Event: {eventId}</h2>
        </>
    )
}
