import React from 'react';

import Container from 'react-bootstrap/Container';

import FirstPage from './FirstPage/FirstPage';
import Skill from './SkillPage/SkillPage';
import Project from './ProjectPage/ProjectPage';
import Work from './WorkPage/WorkPage';
import Profile from './ProfilePage/ProfilePage';
import FootPage from './FootPage/FootPage';
import Navigation from './Navigation/Navigation';

const Resume = () => {

	const refs = {
		'FirstPage': React.createRef(),
		'Profile': React.createRef(),
		'Skill': React.createRef(),
		'Project': React.createRef(),
		'Work': React.createRef()
	}

    return (
		<>
			<Navigation refProp={refs} />
			<Container fluid>
				<div ref={refs['FirstPage']}><FirstPage /></div>
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
