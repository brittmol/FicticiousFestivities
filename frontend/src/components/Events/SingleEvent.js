import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getSingleEvent} from '../../store/event'
import { getComments } from '../../store/comment'
import { getTickets, createTicket, removeTicket } from '../../store/ticket'
import { useEffect } from 'react';
import EditEventFormModal from './EditEventFormModal'
import './Events.css'

export default function SingleEvent() {
    const { eventId } = useParams();
    const dispatch = useDispatch()
    const history = useHistory();

    useEffect(() => {
        dispatch(getSingleEvent(eventId))
    }, [dispatch, eventId])

    useEffect(() => {
        dispatch(getComments(eventId))
    }, [dispatch, eventId])

    useEffect(() => {
        dispatch(getTickets())
    }, [])

    const event = useSelector(store => store.eventReducer[eventId]);
    const sessionUser = useSelector(state => state.session.user);
    const tickets = useSelector(store => store.ticketReducer);
    const comments = useSelector(store => store.commentReducer);
    const commentsArr = Object.values(comments)

    console.log('comments = ', comments)
    console.log('commentsArr = ', commentsArr)

    let editCommentButton = (
        <button className="tickets-button">
            <i className="fas fa-edit" />
        </button>
    )

    let ticketButton;
    if (tickets[eventId] && sessionUser?.id === tickets[eventId]?.userId) {
        ticketButton = (
            <>
                <button
                    className='get-ticket-button'
                    style={{marginRight: '10px'}}
                >
                    <i className="fas fa-ticket-alt" />
                    <i className="fas fa-user-check" style={{margin: '0'}}/>
                </button>
                <button
                    className='remove-ticket-button'
                    onClick={() => {
                        dispatch(removeTicket(eventId))
                    }}
                >
                    <i className="fas fa-trash-alt" />
                    Remove Ticket
                </button>
            </>
        )
    } else if (sessionUser) {
        ticketButton = (
            <button
                className='get-ticket-button'
                onClick={() => {
                    dispatch(createTicket(sessionUser.id, eventId))
                }}
            >
                <i className="fas fa-ticket-alt" />
                Get Ticket!
            </button>
        )
    }


    let sessionLinks;
    if (sessionUser && sessionUser?.id === event?.hostId) {
      sessionLinks = (
        <>
            <EditEventFormModal user={sessionUser} event={event}/>
        </>
      );
    }

    return (
        <main>
            <section className='single-card'>
                <div className='event-card-single'>
                    <div className='single-card-buttons'>
                        <div>
                            {sessionLinks}
                        </div>
                        <div>
                            {ticketButton}
                        </div>
                    </div>
                    <div className='card_title'>
                        <h2>{event?.title}</h2>
                    </div>
                    <div className='card_img-container'>
                        <img src={event?.image} style={{height: '500px'}}></img>
                    </div>
                    <div className='card_content'>
                        <p>Location: {event?.location}</p>
                        <p>When: {event?.datetime}</p>
                        <p>About: {event?.summary}</p>
                        {/* <p>Hosted by: {event?.hostId}</p> */}
                    </div>
                    <div className='comments'>
                        <h2>Comments</h2>
                        <h3></h3>
                        {commentsArr?.map((comment) => (
                            <div className='single_comment'>
                                <p>User: {comment?.userId}</p>
                                <p>{comment?.comment}</p>
                                <p>
                                    {comment && sessionUser?.id === comment?.userId ? editCommentButton : null}
                                </p>
                                <br></br>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
