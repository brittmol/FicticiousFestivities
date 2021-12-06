import { useSelector } from 'react-redux';

export default function EventList() {
    const events = useSelector(state => state.events);
    return (
        <>
            <h2>All Events</h2>
        </>
    )
}
