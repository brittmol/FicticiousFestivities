import { Link } from 'react-router-dom';
import '../Events/Events.css'

export default function AboutMe() {

    return (
        <main>
            <section className='single-card'>
                <div className='event-card-single'>
                    <div>
                        <img src="https://avatars.githubusercontent.com/u/87881860?v=4" alt="Photo of Brittany Moliver Here"></img>
                    </div>
                    <div className='card_title' style={{paddingTop: '20px'}}>
                        <h2>Brittany Moliver</h2>
                    </div>
                    <div className='card_content' style={{paddingTop: '0px'}}>
                        <p style={{lineHeight: '25px', width: '800px'}}>
                        Hi! My name is Brittany and I’m from Miami, Florida! I attended college at Penn State University and furthered my education at Thomas Jefferson University with a Masters in Medical Sciences. I later found a passion for programming, and have been pursing it ever since. I have loved exploring React and Redux frameworks for this website and learned a lot along the way. Enjoy My Ficticious Festivities Website! =D
                        </p>
                    </div>
                    <div>
                        <Link to='https://github.com/brittmol'>
                            <i className="fab fa-github-square fa-3x" style={{color: 'coral'}}/>
                        </Link>
                        <Link to='https://www.linkedin.com/in/brittany-moliver-5673521b2/' style={{color: 'coral'}}>
                            <i className="fab fa-linkedin fa-3x" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )

}
