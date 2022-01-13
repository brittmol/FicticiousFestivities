import { useSelector, useDispatch } from 'react-redux';
import { getComments } from '../../store/comment'
import { useEffect, useState } from 'react';
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

    // -------------------- comment edit box -------------------
    const oldstate = {
        value: 'Some text here',
        isInEditMode: false
    }

    const [state, setState] = useState(oldstate || '');


    const changeEditMode = () => {
        setState({
            isInEditMode: !state.isInEditMode
        })
    }

    let commentBox;
    if (state.isInEditMode) {
        commentBox = (
          <div>
              <input
                type='text'
                value={oldstate.value}
                onChange={(e) => setState(e.target.value)}

              />
              <button onClick={changeEditMode}>X</button>
              <button onClick={changeEditMode}>Ok</button>
          </div>
        );
    } else {
        commentBox = (
            <div>
                {oldstate.value}
                <button onClick={changeEditMode}>Edit</button>
            </div>
        )
    }

    // -----------------------------------------------

    return (
        <div className='comments'>
            <div>
                {commentBox}
            </div>

            <br></br>
            <br></br>

            <h2>Comments</h2>
            {commentsArr?.map((comment) => (
                <div className='single_comment'>
                    <p>User: {comment?.User?.username}</p>
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
