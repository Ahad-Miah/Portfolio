import React from 'react';
import Banner from '../Components/Banner/Banner';
import Education from '../Components/Education/Education';
import AboutMe from '../Components/AboutMe/AboutMe';
import Skills from '../Components/Skills/Skills';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Education></Education>
            <Skills></Skills>
        </div>
    );
};

export default Home;