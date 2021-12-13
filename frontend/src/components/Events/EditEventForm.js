import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateEvent, removeEvent } from '../../store/event';
import { useParams } from 'react-router';

const EditEventForm = ({event, onClose}) => {
    const { eventId } = useParams()
    const dispatch = useDispatch()
    const history = useHistory();
    const user = useSelector(store => store.session)

    const [title, setTitle] = useState(event?.title || "")
    const [location, setLocation] = useState(event?.location || "")
    const [datetime, setDatetime] = useState(event?.datetime || "")
    const [summary, setSummary] = useState(event?.summary || "")
    const [image, setImage] = useState(event?.image || "")
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            id: eventId,
            title,
            location,
            datetime,
            summary,
            image,
            hostId: user.id,
        };

        setErrors([])
        dispatch(updateEvent(payload))
            .then(event => history.push(`events/${event.id}`))
            .then(event => onClose())
            .catch(async(res) => {
                const data = await res.json()
                if(data && data.errors) return setErrors(data.errors)
            })

        // let updatedEvent = await dispatch(updateEvent(payload))
        // if (updatedEvent) {
        //     onClose()
        //     history.push(`/events/${event.id}`);
        // }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Edit Event</h2>
            <ul style={{color: 'white'}}>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <input
                type='text'
                placeholder='Event Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                // required
            />
            <input
                type='text'
                placeholder='Location'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                // required
            />
            <input
                type='datetime-local'
                placeholder='Date and Time'
                value={datetime}
                onChange={(e) => setDatetime(e.target.value)}
                required
            />
            <input
                type='text'
                placeholder='Description...'
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                // required
            />
            <input
                type='text'
                placeholder='Image URL'
                value={image}
                onChange={(e) => setImage(e.target.value)}
                // required
            />
            <button type="submit">
                <i className="fas fa-edit" />
                Edit Event
            </button>
            <button onClick={() => {
                dispatch(removeEvent(event))
                history.push(`/events`)
            }}
            >
                <i className="fas fa-trash-alt" />
                Delete Event
            </button>
        </form>
    )

}

export default EditEventForm;
