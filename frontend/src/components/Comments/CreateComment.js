import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createComment } from '../../store/comment';


const CreateCommentForm = ({user, eventId}) => {
    const dispatch = useDispatch()
    const history = useHistory();

    const [comment, setComment] = useState("")
    const [errors, setErrors] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            comment,
            eventId,
            userId: user.id,
        };

        setErrors([])
        const newComment = await dispatch(createComment(payload))
            .catch(async(res) => {
                const data = await res.json()
                if(data && data.errors) return setErrors(data.errors)
            })
        if (newComment) {
            history.push(`/events/${eventId}`);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Comment</h2>
            <ul style={{color: 'white'}}>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <input
                type='text'
                placeholder='Write a comment...'
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                // required
            />
            <button type="submit">
                <i className="fas fa-plus-circle" />
            </button>
        </form>
    )

}

export default CreateCommentForm;
