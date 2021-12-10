import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as sessionActions from "../../store/session";
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import CreateEventFormModal from '../Events/CreateEventFormModal';
import './Navigation.css';
import DemoUser from '../DemoUser/DemoUser';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <CreateEventFormModal user={sessionUser}/>
        <button className="tickets-button">
          <i className="fas fa-ticket-alt" />
          <NavLink exact to="/mytickets">MyTickets</NavLink>
        </button>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        {/* <NavLink to="/login">Log In</NavLink> */}
        <LoginFormModal />
        {/* <NavLink to="/signup">Sign Up</NavLink> */}
        <SignupFormModal />
        <DemoUser />
      </>
    );
  }

  return (
    <nav>
      <button className="tickets-button">
        <i className="fas fa-calendar-alt" />
        <NavLink exact to="/events">All Events</NavLink>
      </button>
      {isLoaded && sessionLinks}
    </nav>
  );
}

export default Navigation;
