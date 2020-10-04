import React from 'react';

import Project from './Project';
import OtherPage from '../../../hoc/OtherPage';
import VisAnalysisImg from '../../../asset/VisAnalysis.png';
import RoadRecognitionImg from '../../../asset/road_recognition.jpg';
import DiffPredictImg from '../../../asset/info.png';
import XdsfImg from '../../../asset/xdsf.gif';
import FilterPresetImg from '../../../asset/filterpreset.png';
import CascadingFilerImg from '../../../asset/cascadingFilter.png';
import TableauCatalogImg from '../../../asset/TableauCatalog.png';
import EmptyStateImg from '../../../asset/emptyState.jpg';
import PendingMembersImg from '../../../asset/pendingMembers.png';
import UglyGames from '../../../asset/ugly-games.PNG';
import TeacherLed from '../../../asset/teacherled.gif';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const projectData = [
    {
        name: 'Graph Visual Analysis Platform',
        description: 'Traverse a large network in an iterative manner',
        tags: ['C++', 'd3.js', 'Graph Algorithm'],
        imgSrc: VisAnalysisImg,
        projectLink: 'https://github.com/RanningMan/LargeNetworkDataVisualPlatform'
    },
    {
        name: 'Automatic Road Recognition',
        description: 'Helps machine distinguish road in an image',
        tags: ['matlab', 'machine learning'],
        imgSrc: RoadRecognitionImg,
        projectLink: ''
    },
    {
        name: 'Information Diffusion Predict',
        description: 'Predicts spread of information in social network',
        tags: ['Java', 'SQL', 'Graph Algorithm'],
        imgSrc: DiffPredictImg,
        projectLink: 'https://github.com/RanningMan/InformationDiffusionModel'
    },
    {
        name: 'Cross Datasource Filtering',
        description: 'Allow users to apply a filter across multiple primary data sources.',
        tags: ['C++', 'Tableau'],
        imgSrc: XdsfImg,
        projectLink: 'https://www.tableau.com/about/blog/2016/5/requested-you-can-filter-across-data-sources-tableau-10-54330'
    },
    {
        name: 'Latest Date Filter Preset',
        description: 'Allow users to automatically apply date filters on workbook open.',
        tags: ['C++', 'Qt', 'Tableau'],
        imgSrc: FilterPresetImg,
        projectLink: 'https://help.tableau.com/v10.3/pro/desktop/en-us/filtering.html#LatestDatePresets'
    },
    {
        name: 'Filter All values in Hierarchy',
        description: 'Allow users to specify which values to show in the filter.',
        tags: ['C++', 'Tableau'],
        imgSrc: CascadingFilerImg,
        projectLink: 'https://help.tableau.com/current/pro/desktop/en-us/filtering.htm'
    },
    {
        name: 'Tableau Catalog',
        description: 'Allows users to build a data catalog out of the Tableau content.',
        tags: ['React', 'Java', 'GraphQL'],
        imgSrc: TableauCatalogImg,
        projectLink: 'https://help.tableau.com/current/server/en-us/dm_catalog_overview.htm'
    },
    {
        name: 'Teams for EDU: Programmable Empty State',
        description: 'Suggestions for teacher to start build a healthy class',
        tags: ['AngularJS', 'TypeScript', 'DevOps'],
        imgSrc: EmptyStateImg,
        projectLink: ''
    },
    {
        name: 'Teams for EDU: Early Class Access',
        description: 'Allow teachers to set up a class before granting access to students',
        tags: ['AngularJS', 'TypeScript'],
        imgSrc: PendingMembersImg,
        projectLink: 'https://support.office.com/en-us/article/activate-early-access-class-teams-created-with-school-data-sync-0d154696-66ab-4fcf-b22f-c3d9a82aaf78'
    },
    {
        name: 'Ugly Games',
        description: 'Classic games implemented in js with ugly UI',
        tags: ['JavaScript', 'TypeScript'],
        imgSrc: UglyGames,
        projectLink: 'https://ranningman.github.io/UglyGames/'
    },
    {
        name: 'Teams for EDU: Teacher led team creation',
        description: 'Allows educators to easily create the classes.',
        tags: ['AngularJS', 'TypeScript'],
        imgSrc: TeacherLed,
        projectLink: 'https://educationblog.microsoft.com/en-us/2020/07/9-awesome-teams-updates-for-it-admins-and-back-to-school-deployment/'
    }
]

const projects = () => {
    const clickHandler = (link) => {
        if(link)
            window.location.href = link;
    }

    return (
        <OtherPage title="Projects" qoute="I feel like every project I work on is a dream project, so long as I am learning. -- Simeon Kondev" backgroundStyle="resume-light">
            <Row>
                {
                    projectData.map(proj => 
                        <Col md={6} xl={4} key={proj.name}>
                            <Project 
                                key={proj.name}
                                name={proj.name} 
                                description={proj.description} 
                                tags={proj.tags} 
                                src={proj.imgSrc}
                                clicked={() => clickHandler(proj.projectLink)}>
                            </Project>
                        </Col>
                    )
                }
            </Row>
        </OtherPage>
    );
};

export default projects;