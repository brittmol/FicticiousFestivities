import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateEvent } from '../../store/event';
import { useParams } from 'react-router';

const EditEventForm = () => {
    const { eventId } = useParams()
    const dispatch = useDispatch()
    const user = useSelector(store => store.session)

    const [title, setTitle] = useState("")
    const [location, setLocation] = useState("")
    const [datetime, setDatetime] = useState("")
    const [summary, setSummary] = useState("")
    const [image, setImage] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            // ...event,
            eventId,
            title,
            location,
            datetime,
            summary,
            image,
            hostId: user.id,
        };

        let updatedEvent = await dispatch(updateEvent(payload))
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Event Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type='text'
                placeholder='Location'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <input
                type='datetime-local'
                placeholder='Date and Time'
                value={datetime}
                onChange={(e) => setDatetime(e.target.value)}
            />
            <input
                type='text'
                placeholder='Description...'
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
            />
            <input
                type='text'
                placeholder='Image URL'
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />
            <button type="submit">Create New Event</button>
        </form>
    )

}

export default EditEventForm;
