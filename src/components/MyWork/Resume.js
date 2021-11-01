import React, { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';

import FirstPage from './FirstPage/FirstPage';
import Skill from './SkillPage/SkillPage';
import Project from './ProjectPage/ProjectPage';
import Work from './WorkPage/WorkPage';
import Profile from './ProfilePage/ProfilePage';
import FootPage from './FootPage/FootPage';
import Navigation from './Navigation/Navigation';
import MobileNavigation from './Navigation/MobileNavigation';

const Resume = () => {

	const refs = {
		'FirstPage': React.createRef(),
		'Profile': React.createRef(),
		'Skill': React.createRef(),
		'Project': React.createRef(),
		'Work': React.createRef()
	}

	const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 767);
	const onWindowResize = () => {
		setIsLargeScreen(window.innerWidth > 767);
	}
	useEffect(() => {
		window.addEventListener("resize", onWindowResize);
    	return () => window.removeEventListener("resize", onWindowResize);
	},[]);

    return (
		<>
			{isLargeScreen ? <Navigation refProp={refs} /> : <MobileNavigation refProp={refs}/> }
			<Container fluid>
				<div ref={refs['FirstPage']}><FirstPage isLargeScreen={isLargeScreen} /></div>
				<div ref={refs['Profile']}><Profile /></div>
				<div ref={refs['Skill']}><Skill /></div>
				<div ref={refs['Project']}><Project /></div>
				<div ref={refs['Work']}><Work /></div>
				<FootPage />
			</Container>
		</>
    )
};

export default Resume;
