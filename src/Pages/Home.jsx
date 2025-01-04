import React from 'react';
import Banner from '../Components/Banner/Banner';
import Education from '../Components/Education/Education';
import AboutMe from '../Components/AboutMe/AboutMe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Education></Education>
        </div>
    );
};

export default Home;