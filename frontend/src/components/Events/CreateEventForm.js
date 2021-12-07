import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createEvent } from '../../store/event';


const CreateEventForm = () => {
    const dispatch = useDispatch()
    const history = useHistory();

    const [title, setTitle] = useState("")
    const [location, setLocation] = useState("")
    const [datetime, setDatetime] = useState("")
    const [summary, setSummary] = useState("")
    const [image, setImage] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            title,
            location,
            datetime,
            summary,
            image,
        };

        const event = await dispatch(createEvent(payload));
        if (event) {
          history.push(`/events/${event.id}`);
        //   hideForm();
        }
    };

    const handleCancelClick = (e) => {
        e.preventDefault();
        // hideForm();
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
                type='text'
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
            <button type="button" onClick={handleCancelClick}>Cancel</button>
        </form>
    )

}

export default CreateEventForm;