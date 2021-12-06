import { useSelector } from 'react-redux';


export default function EventList() {
    const events = useSelector(state => state.events);
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
