import { useState, useEffect } from 'react';
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
  const [showCart, setShowCart] = useState(true);

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
        <LoginFormModal />
        <SignupFormModal />
        <DemoUser />
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
      {isLoaded && sessionLinks}
    </nav>
  );
}

export default Navigation;
