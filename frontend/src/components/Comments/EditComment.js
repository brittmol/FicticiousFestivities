import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateComment, removeComment } from '../../store/comment';
import { useParams } from 'react-router';

const EditCommentForm = ({comment, onClose}) => {
    const { eventId} = useParams()
    // console.log('eventId =', eventId)
    // console.log('commentId =', comment.id)
    const dispatch = useDispatch()
    const history = useHistory();
    const user = useSelector(store => store.session)

    const [newComment, setNewComment] = useState(comment?.comment || "")
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            id: newComment.id,
            comment: newComment.comment,
            eventId,
            userId: user.id,
        };

        setErrors([])
        const updatedComment = await dispatch(updateComment(payload))
            .catch(async(res) => {
                const data = await res.json()
                if(data && data.errors) return setErrors(data.errors)
            })
        if (updatedComment) {
            onClose()
            history.push(`/events/${eventId}`);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Edit Comment</h2>
                <ul style={{color: 'white'}}>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <input
                    type='text'
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    // required
                />
                <button type="submit">
                    <i className="fas fa-edit" />
                </button>
            </form>
            <button onClick={() => {
                dispatch(removeComment(comment))
                onClose()
                history.push(`/events/${eventId}`)
            }}
            >
                <i className="fas fa-trash-alt" />
            </button>
        </>
    )

}

export default EditCommentForm;
