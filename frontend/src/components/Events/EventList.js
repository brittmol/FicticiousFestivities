import { useSelector, useDispatch } from 'react-redux';
import { getEvents } from '../../store/event'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function EventList() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getEvents())
    }, [])

    const events = useSelector(store => store.eventReducer);
    const eventsArr = Object.values(events);

    return (
        <>
            <h2>All Events</h2>
            <ul>
                {eventsArr?.map((event) => (
                <li>
                    {event.title}
                    <br/>
                    <Link to={`/events/${event.id}`}>
                        <img src={event.image} style={{height: '200px'}}></img>
                    </Link>
                </li>
                ))}
            </ul>
        </>
    )
}
