import React from 'react';

import classes from './NameTag.module.css';
import separater from '../../../asset/separate.png';
import NameBlock from '../../../hoc/NameBlock';
import MyResume from '../../../asset/XIA-Ran-SoftwareDeveloper-Resume.pdf'

const NameTag = (props) => (
    <NameBlock color={classes.NameColor} isFrontPage={props.isFrontPage}>
        <div className={classes.Tag}>
            <span>Full Stack</span>
            <img className={classes.Separater} src={separater} alt=' * '/>
            <span>Data Driven</span>
            <img className={classes.Separater} src={separater} alt=' * '/>
            <span>Software Engineer</span>
        </div>
        { 
            !props.isFrontPage && <div className={classes.DownloadDiv}>
                <a href={MyResume} className={classes.Download}>Download My Resume</a>
            </div>
        }
    </NameBlock>
);

export default NameTag;