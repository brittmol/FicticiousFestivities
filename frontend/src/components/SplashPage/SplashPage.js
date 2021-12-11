import { Link } from 'react-router-dom';
import './splashpage.css'

export default function SplashPage() {
    return (
        <div className='splashPage'>
            <Link className='splashPageLink' to='/events' style={{ textDecoration: 'none' }}>
                <h1 className='splashPageHeader'>Ficticious Festivities!!!</h1>
            </Link>
        </div>
    )
}
