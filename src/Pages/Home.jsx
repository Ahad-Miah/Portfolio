import React from 'react';
import Banner from '../Components/Banner/Banner';
import Education from '../Components/Education/Education';
import AboutMe from '../Components/AboutMe/AboutMe';
import Skills from '../Components/Skills/Skills';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Education></Education>
        </div>
    );
};

export default Home;