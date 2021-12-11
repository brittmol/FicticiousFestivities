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
    // <nav>
      // <NavLink exact to="/events">
      //   <button className="tickets-button">
      //     <i className="fas fa-calendar-alt" />
      //     All Events
      //   </button>
      // </NavLink>
      // {isLoaded && sessionLinks}
    // </nav>
    <>
      <nav>
        {/* <h1>Grocery Store</h1> */}
        <button className="checkout-button" onClick={() => setShowCart(true)}>
          <i className="fas fa-shopping-bag" />
          Checkout
        </button>
      </nav>
      <div
        className="sidebar"
        style={showCart ? { transform: 'translateX(100%)' } : {}}
      >
        <div className="sidebar-header">
          <button className="arrow-button" onClick={() => setShowCart(false)}>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
          <NavLink exact to="/events">
            <button className="tickets-button">
              <i className="fas fa-calendar-alt" />
              All Events
            </button>
          </NavLink>
          {isLoaded && sessionLinks}
      </div>
    </>
  );
}

export default Navigation;
