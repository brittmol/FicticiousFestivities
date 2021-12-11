import React, { useState, useEffect } from "react";
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import DemoUser from '../DemoUser/DemoUser';

function LoggedOut() {

  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);


  return (
    <>
      <button className="checkout-button" onClick={openMenu}>
        <i className="fas fa-user-circle" />
        Profile
      </button>
      {showMenu && (
        <div
          className="sidebar"
          style={showMenu ? { transform: 'translateX(-100%)'} : {}}
        >
          <div className="sidebar-header">
            <button className="arrow-button">
              <i className="fas fa-user-circle"></i>
              Profile
            </button>
          </div>
          <ul className="profile-dropdown">
            <li>
                <DemoUser />
            </li>
            <li>
                <SignupFormModal />
            </li>
            <li>
                <LoginFormModal />
            </li>
          </ul>
        </div>

      )}
    </>
  );
}

export default LoggedOut;
