import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getSingleEvent} from '../../store/event'
import { getTickets, createTicket, removeTicket } from '../../store/ticket'
import { useEffect } from 'react';
import EditEventFormModal from './EditEventFormModal'
import LoadComments from '../Comments/LoadComments';
import CreateCommentForm from '../Comments/CreateComment';

import './Events.css'

export default function SingleEvent() {
    const { eventId } = useParams();
    const dispatch = useDispatch()
    const history = useHistory();

    useEffect(() => {
        dispatch(getSingleEvent(eventId))
    }, [dispatch, eventId])

    useEffect(() => {
        dispatch(getTickets())
    }, [])

    const event = useSelector(store => store.eventReducer[eventId]);
    const sessionUser = useSelector(state => state.session.user);
    const tickets = useSelector(store => store.ticketReducer);

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
    } else {
        ticketButton = null;
    }

    let createCommentBox;
    if (sessionUser) {
        createCommentBox = (
            <>
                <CreateCommentForm user={sessionUser} eventId={eventId}/>
            </>
        )
    } else {
        createCommentBox = (
            <>
                <h3>Login to Create a Comment!</h3>
            </>
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

    // --------- datetime --------------

    const date = new Date(event?.datetime).toLocaleDateString('en-US')
    const time = new Date(event?.datetime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

    // const date = event?.datetime
    // const dateObj = new Date(date)
    // const day = dateObj.getUTCDate();
    // const month = dateObj.getUTCMonth() + 1; //months from 1-12
    // const year = dateObj.getUTCFullYear();
    // const newdate = year + "/" + month + "/" + day;


    console.log('date2 = ',date)
    // console.log('dateObj = ', dateObj)
    // console.log('year = ', year)
    // console.log('month = ', month)

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
                        <p>Hosted by: {event?.User?.username}, #{event?.hostId}</p>
                        <p>Location: {event?.location}</p>
                        <p>Date: {date}</p>
                        <p>Time: {time}</p>
                        <p>About: {event?.summary}</p>
                    </div>
                    <div>
                        {createCommentBox}
                        <LoadComments user={sessionUser} eventId={eventId}/>
                    </div>
                </div>
            </section>
        </main>
    )
}
