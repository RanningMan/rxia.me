import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'

import OtherPage from '../../../hoc/OtherPage';
import Skill from './Skill';
import classes from './SkillPage.module.css'

const technology = {
    'HTML(5)': 5,
    'CSS(3)': 5,
    'JavaScript': 5,
    'TypeScript': 5,
    'React (Redux)': 5,
    'GraphQL': 5,
    'node.js': 5,
    'AngularJS': 4,
    'MondoDB': 4,
    'C++': 4,
    'Tableau': 4,
    'Git': 4,
    'C#': 3,
    'Java': 2,
    'SQL': 2,
}

const domains = {
    'Graph Algorithms': 5,
    'Web Performance': 5,
    'Data Visualization': 4,
    'Refactoring': 4,
    'Agile': 4,
    'Serverless': 4,
    'Accessibility': 3,
    'Machine Learning': 3,
}

const buildSkillTable = (skillType, skillList) => {
    let left = [], right = [];
    if (window.innerWidth > 767) {
        Object.keys(skillList).forEach((key, index) => {
            if (index % 2 === 0) {
                left.push({
                    name: key,
                    star: skillList[key]
                });
            }
            else {
                right.push({
                    name: key,
                    star: skillList[key]
                });
            }
        });
    }
    else {
        Object.keys(skillList).forEach((key, index) => {
            left.push({
                name: key,
                star: skillList[key]
            });
        });
    }

    return <>
        <Row className={classes.SkillType}><Col md={12}><h3>{skillType}</h3></Col></Row>
        <Row className={classes.SkillPage}>
            <Col md={6}>
                <ListGroup>
                    {
                        left.map(skill => <Skill name={skill.name} starLevel={skill.star} key={skill.name}></Skill>)
                    }
                </ListGroup>
            </Col>
            <Col md={6}>
                <ListGroup>
                    {
                        right.map(skill => <Skill name={skill.name} starLevel={skill.star} key={skill.name}></Skill>)
                    }
                </ListGroup>
            </Col>
        </Row>
    </>;
}

const skill = () => {
    const Tech = buildSkillTable('Technology', technology);
    const Domain = buildSkillTable('Domains', domains);

    return (
        <OtherPage title="Skills" qoute="Success is that old ABC - ability, breaks and courage. -- Charles Luckman" backgroundStyle="resume-dark">
            {Tech}
            {Domain}
        </OtherPage>
    );
}

export default skill;
