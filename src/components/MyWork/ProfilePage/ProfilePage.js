import React from 'react';

import OtherPage from '../../../hoc/OtherPage';
import AboutMe from './AboutMe';
import Photo from './Photo';
import Contact from './Contact';
import classes from './ProfilePage.module.css';
import RanPhoto from '../../../asset/Ran.jpg';

const aboutMeContent = `I'm a software engineer with broad interests and skills. I have a huge interest in mining and visualizing data, as well as building fun products. I enjoy learning, working, and shipping features with a lovely team.`


const profile = () => (
    <OtherPage title="Profile" qoute="I'm a data driven full stack software engineer." backgroundStyle="resume-light">
        <div className={classes.ProfilePage}>
            <AboutMe content={aboutMeContent}/>
            <Photo src={RanPhoto}/>
            <Contact />
        </div>
    </OtherPage>
);

export default profile;