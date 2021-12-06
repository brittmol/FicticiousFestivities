import { useSelector, useDispatch } from 'react-redux';
import { getEvents } from '../../store/event'
import { useEffect } from 'react';


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
                {eventsArr.map((event) => (
                <li>{event.title}</li>
                ))}
            </ul>
        </>
    )
}
