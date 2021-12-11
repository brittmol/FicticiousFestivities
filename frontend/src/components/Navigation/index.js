import { useState, useEffect } from 'react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as sessionActions from "../../store/session";
import ProfileButton from './ProfileButton';
import CreateEventFormModal from '../Events/CreateEventFormModal';
import LoggedOut from './LoggedOut';
import SignupFormModal from '../SignupFormModal';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <CreateEventFormModal user={sessionUser}/>
        <NavLink exact to="/mytickets">
          <button className="tickets-button">
            <i className="fas fa-ticket-alt" />
            MyTickets
          </button>
        </NavLink>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <SignupFormModal />
        <LoginFormModal />
        <LoggedOut />
      </>
    );
  }

  return (
    <nav>
      <NavLink exact to="/events">
        <button className="tickets-button">
          <i className="fas fa-calendar-alt" />
          All Events
        </button>
      </NavLink>
      <NavLink exact to="/aboutme">
        <button className="tickets-button">
          <i className="fas fa-smile" />
          About Me
        </button>
      </NavLink>
      {isLoaded && sessionLinks}
    </nav>
  );
}

export default Navigation;
