import './cover.scss';
import {Link} from 'react-router-dom';

function Cover(){
 return (
    <div className="cover-container">
        <h1>Hey, Talish here! Discover my stories and creative ideas.</h1>
        <div className="content-cover">
            <img src='coverImage.jpg'/>
            <div className="content-item">
                <h2>Simple Ways to Inspire Your Inner Innovato</h2>
                <p>I'm skilled in MERN, C, C++, Java, and Python, and currently focusing on TypeScript. I’ve completed courses like the GeeksforGeeks API Bootcamp and the Great Learning React tutorial. I enjoy working on challenging projects, like my real estate website 'Property Pulse' and a tour booking app.
                As a coordinator in my college society 'Awaaz,' I lead teams and manage events, honing my leadership and communication skills. I'm also a part of GeeksforGeeks’ Fullstack Bootcamp, pushing myself to become a better developer.


                </p>
                <button><Link to='/about'>Read more</Link></button>
            </div>
        </div>
    </div>
 )
}

export default Cover;