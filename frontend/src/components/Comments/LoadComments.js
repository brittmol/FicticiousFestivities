import { useSelector, useDispatch } from 'react-redux';
import { getComments } from '../../store/comment'
import { useEffect } from 'react';
import EditCommentFormModal from './EditCommentModal';


const LoadComments = ({user, eventId}) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getComments(eventId))
    }, [dispatch, eventId])

    const comments = useSelector(store => store.commentReducer);
    const commentsArr = Object.values(comments)
    // commentsArr sorting
    commentsArr.sort(function(a,b) {
        // console.log(a.createdAt < b.createdAt)
        return -1;
    })

    // console.log('commentsArr = ', commentsArr)

    let editCommentButton = (comment) => {
        return (
            <button className="tickets-button">
                <EditCommentFormModal comment={comment} />
            </button>
        )
    }

    return (
        <div className='comments'>
            <h2>Comments</h2>
            {commentsArr?.map((comment) => (
                <div className='single_comment'>
                    <p>User: {comment?.userId}</p>
                    <p>{comment?.comment}</p>
                    <p>
                        {comment && user?.id === comment?.userId ? editCommentButton(comment) : null}
                    </p>
                    <br></br>
                </div>
            ))}
        </div>
    )
}
export default LoadComments;
