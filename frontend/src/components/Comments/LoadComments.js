import { useSelector, useDispatch } from 'react-redux';
import { getComments } from '../../store/comment'
import { useEffect, useState } from 'react';
// import EditCommentFormModal from './EditCommentModal';
import NewEditCommentForm from './NewEditComment';


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


    // -------------- display comment ---------------
    const [editMode, setEditMode] = useState(false);

    const stopEditing = () => {
        setEditMode(false)
    }

    let displayComment = (comment) => {
        return (comment && user?.id === comment?.userId ? userComment(comment) : otherComment(comment))
    }

    let otherComment = (comment) => {
        return (
            <div>
                {comment?.comment}
            </div>
        )
    }

    let userComment = (comment) => {
        if (editMode) {
            return (
                <>
                    <NewEditCommentForm comment={comment} stopEditing={stopEditing} />
                </>
            )
        } else {
            return (
                <>
                    <div>
                        {comment?.comment}
                    </div>
                    <button onClick={() => setEditMode(true)}>Edit</button>
                </>
            )
        }

    }

    // let editCommentButton = (comment) => {
    //     return (
    //         <button className="tickets-button">
    //             <EditCommentFormModal comment={comment} />
    //         </button>
    //     )
    // }

    return (
        <div className='comments'>
            <h2>Comments</h2>
            {commentsArr?.map((comment) => (
                <div className='single_comment'>
                    <p>User: {comment?.User?.username}</p>
                    <p>{comment ? displayComment(comment) : null}</p>
                    {/* <p>{comment?.comment}</p>
                    <p>
                        {comment && user?.id === comment?.userId ? editCommentButton(comment) : null}
                    </p> */}
                    <br></br>
                </div>
            ))}
        </div>
    )
}
export default LoadComments;
