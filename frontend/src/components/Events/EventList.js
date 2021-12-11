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
        <main style={{marginTop: '120px'}}>
            <h2 className='page-title'>All Events!!!</h2>
            <section className='cards'>
                {eventsArr?.map((event) => (
                    <Link to={`/events/${event.id}`} style={{ textDecoration: 'none' }}>
                        <div className='event-card'>
                            <div className='card_title'>
                                {event.title}
                            </div>
                            <div className='card_img-container'>
                                <img src={event.image} style={{height: '200px'}}></img>
                            </div>
                        </div>
                    </Link>
                ))}
            </section>
        </main>
    )
}
