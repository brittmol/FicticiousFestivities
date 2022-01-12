import { useSelector, useDispatch } from 'react-redux';
import { getComments } from '../../store/comment'
import { useEffect } from 'react';


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

    let editCommentButton = (
        <button className="tickets-button">
            <i className="fas fa-edit" />
        </button>
    )

    return (
        <div className='comments'>
            <h2>Comments</h2>
            {commentsArr?.map((comment) => (
                <div className='single_comment'>
                    <p>User: {comment?.userId}</p>
                    <p>{comment?.comment}</p>
                    <p>
                        {comment && user?.id === comment?.userId ? editCommentButton : null}
                    </p>
                    <br></br>
                </div>
            ))}
        </div>
    )
}
export default LoadComments;
