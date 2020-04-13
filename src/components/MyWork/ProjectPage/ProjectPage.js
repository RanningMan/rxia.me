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
import classes from './ProjectPage.module.css';

import CardDeck from 'react-bootstrap/CardDeck';

const projectData = [
    {
        name: 'Graph Visual Analysis Platform',
        description: 'Traverse a large network in an iterative manner',
        tags: ['C++', 'web development', 'SQL', 'Graph Algorithm'],
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
        tags: ['C++', 'Tableau', 'Filtering', 'Data Visualization'],
        imgSrc: XdsfImg,
        projectLink: 'https://www.tableau.com/about/blog/2016/5/requested-you-can-filter-across-data-sources-tableau-10-54330'
    },
    {
        name: 'Latest Date Filter Preset',
        description: 'Allow users to select the most recent date in the filter when the workbook is shared or opened',
        tags: ['C++', 'Qt', 'Tableau', 'Filtering', 'Data Visualization'],
        imgSrc: FilterPresetImg,
        projectLink: 'https://help.tableau.com/v10.3/pro/desktop/en-us/filtering.html#LatestDatePresets'
    },
    {
        name: 'Filter All values in Hierarchy',
        description: 'Allow users to specify which values to show in the filter.',
        tags: ['C++', 'Tableau', 'Filtering', 'Data Visualization'],
        imgSrc: CascadingFilerImg,
        projectLink: 'https://help.tableau.com/current/pro/desktop/en-us/filtering.htm'
    },
    {
        name: 'Tableau Catalog',
        description: 'Tableau Catalog builds a catalog out of the Tableau content being used by organization.',
        tags: ['React', 'Java', 'GraphQL', 'Data Management'],
        imgSrc: TableauCatalogImg,
        projectLink: 'https://help.tableau.com/current/server/en-us/dm_catalog_overview.htm'
    },
    {
        name: 'Programmable Empty State',
        description: 'Suggestions for teacher to start build a healthy class',
        tags: ['Angular', 'TypeScript', 'DevOps'],
        imgSrc: EmptyStateImg,
        projectLink: ''
    },
    {
        name: 'Activate Early Access',
        description: 'Give teacher extra time to set up, add files, and get organized before granting access to students',
        tags: ['Angular', 'TypeScript'],
        imgSrc: PendingMembersImg,
        projectLink: 'https://support.office.com/en-us/article/activate-early-access-class-teams-created-with-school-data-sync-0d154696-66ab-4fcf-b22f-c3d9a82aaf78'
    }
]

const projects = () => {
    let cardGroup = [];
    let cur = [];
    projectData.forEach((proj, index) => {
        if(cur.length === 3) {
            cardGroup.push([...cur]);
            cur = [];
        }
        cur.push(proj);
    });
    if(cur.length > 0) {
        cardGroup.push([...cur]);
    }

    const clickHandler = (link) => {
        if(link)
            window.location.href = link;
    }

    return (
        <OtherPage title="Projects" qoute="I feel like every project I work on is a dream project, so long as I am learning. -- Simeon Kondev" backgroundStyle="resume-light">
            {
                cardGroup.map((group, idx) => (
                    <CardDeck key={idx} className={classes.ProjectCardDeck}>
                        {
                            group.map(proj => (
                                <Project
                                    key={proj.name}
                                    name={proj.name} 
                                    description={proj.description} 
                                    tags={proj.tags} 
                                    src={proj.imgSrc}
                                    clicked={() => clickHandler(proj.projectLink)}>
                                </Project>)
                            )
                        }
                    </CardDeck>)
                )
            }
        </OtherPage>
    );
};

export default projects;