import { Link, NavLink } from 'react-router-dom';
import DemoUser from '../DemoUser/DemoUser';
import SignupFormModal from '../SignupFormModal';
import LoginFormModal from '../LoginFormModal';

import '../Navigation/Navigation.css';
import './splashpage.css'

export default function SplashPage() {
    return (
        <>
            {/* <nav style={{justifyContent: 'space-evenly'}}> */}
                {/* <SignupFormModal /> */}
                {/* <LoginFormModal /> */}
                {/* <DemoUser />
                <NavLink exact to="/events">
                    <button className="tickets-button">
                        <i className="fas fa-user-circle" />
                        Enter as Guest
                    </button>
                </NavLink> */}
            {/* </nav> */}
            <div className='splashPage'>
                <Link className='splashPageLink' to='/events' style={{ textDecoration: 'none' }}>
                    <h1 className='splashPageHeader'>Ficticious Festivities!!!</h1>
                </Link>
            </div>
        </>
    )
}
