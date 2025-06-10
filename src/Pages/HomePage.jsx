import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/header/Header';
import banner from '../assets/images/vckbanner.jpg';
import campus1 from '../assets/images/vck1.jpeg';
import campus2 from '../assets/images/vck2.jpg';
import './Home.css';

const HomePage = () => {
    return (
        <div id="root">
            <Header />
            <div id="back"><br />
                {/* Banner with overlay text */}
                <div className="banner-container">
                    <img src={banner} alt="college banner" className="college-image"
 />
                    <div className="banner-text">
                        <h1><strong>Welcome to Vivekanand <br></br>College!</strong></h1>
                        <p><strong id="pm">Your journey to excellence starts here.</strong></p>
                        <Link to="/admission" id="apply-btn"><strong><button className="btn">Apply Now!</button></strong></Link>
                    </div>
                </div><br />

                <p><strong>Vivekanand College</strong> is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in 1980, we have proudly served generations of students, empowering them to achieve their full potential.</p>

                <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>

                <h2><strong>Why Choose Vivekanand College?</strong></h2>

                <hr />
                <ul>
                    <li><strong>Legacy of Excellence:</strong> Decades of commitment to quality education.</li>
                    <li><strong>Experienced Faculty:</strong> Learn from renowned experts and passionate educators.</li>
                    <li><strong>Modern Facilities:</strong> Well-equipped labs, expansive library, and comfortable campus.</li>
                    <li><strong>Holistic Development:</strong> Focus on co-curricular activities, sports, and community service.</li>
                    <li><strong>Strong Placements:</strong> Excellent career opportunities with leading companies.</li>
                </ul>

                <h2>Campus Life & Facilities</h2>
                <img src={campus1} alt="college" className='collegeimage' height={200} />
                <img src={campus2} alt="college" className='collegeimage' height={200} width={450}/>

                <hr />
                <div>
                    <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p><br />
                    <p>Ready to explore our courses?</p>
                    <Link to="/courses" id="aply-btn">
                        <strong><button id="btnn">Explore Courses</button></strong>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
