import { useSelector, useDispatch } from 'react-redux';
import { getEvents } from '../../store/event'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Events.css'

export default function EventList() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getEvents())
    }, [])

    const events = useSelector(store => store.eventReducer);
    const eventsArr = Object.values(events);

    return (
        <main>
            {/* <section className='cards'>
                {eventsArr?.map((event) => (
                    <div className='card'>
                    <div className='card_content'>
                    {event.title}
                    </div>
                    <div className='card_img-container'>
                    <Link to={`/events/${event.id}`}>
                    <img src={event.image} style={{height: '200px'}}></img>
                    </Link>
                    </div>
                    </div>
                    ))}
                </section> */}
                <h2>All Events</h2>
            <ul>
                {eventsArr?.map((event) => (
                    <div className='event-card'>

                        <li>
                            {event.title}
                            <br/>
                            <Link to={`/events/${event.id}`}>
                                <img src={event.image} style={{height: '200px'}}></img>
                            </Link>
                        </li>
                    </div>
                ))}
            </ul>
        </main>
    )
}
