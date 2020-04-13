import React, { useState } from 'react';

import classes from './Travel.module.css';
import OtherPage from '../../../hoc/OtherPage';
import Map from './TableauMap';
import PhotoAlbum from './PhotoAlbum';

import Washington1 from '../../../asset/Washington/aulIfC2Q.jpeg';
import Washington2 from '../../../asset/Washington/D5fDBH7e.jpeg'
import Washington3 from '../../../asset/Washington/di1qSs0-.jpeg';
import Washington4 from '../../../asset/Washington/jOwLcbNV.jpeg';
import Washington5 from '../../../asset/Washington/N_OMQ-0p.jpeg';
import Washington6 from '../../../asset/Washington/VJP_dgzh.jpeg';

import Oregon1 from '../../../asset/Oregon/H3OcRcLg.jpeg';
import Oregon2 from '../../../asset/Oregon/oeALcWud.jpeg';
import Oregon3 from '../../../asset/Oregon/Photo Jul 25, 7 01 06 PM.jpg';
import Oregon4 from '../../../asset/Oregon/Photo Jul 27, 1 06 01 PM.jpg';
import Oregon5 from '../../../asset/Oregon/Photo Nov 24, 4 16 14 PM.jpg';

import California1 from '../../../asset/California/0aOADM9w.jpeg';
import California2 from '../../../asset/California/iCWKg-mA.jpeg';
import California3 from '../../../asset/California/PVrnG5rM.jpeg';
import California4 from '../../../asset/California/qdYxG5vh.jpeg';
import California5 from '../../../asset/California/SxfRqmGq.jpeg';
import California6 from '../../../asset/California/YNQvBs1z.jpeg';

import Idaho1 from '../../../asset/Idaho/beef.jpg';
import Idaho2 from '../../../asset/Idaho/idaho.jpg';
import Idaho3 from '../../../asset/Idaho/images.jpg';
import Idaho4 from '../../../asset/Idaho/road.jpg';

import Nevada1 from '../../../asset/Nevada/3qKehqc5.jpeg';
import Nevada2 from '../../../asset/Nevada/4wJa797y.jpeg';
import Nevada3 from '../../../asset/Nevada/aaadHlJU.jpeg';
import Nevada4 from '../../../asset/Nevada/r5tCzUrq.jpeg';
import Nevada5 from '../../../asset/Nevada/rT_a6YN6.jpeg';
import Nevada6 from '../../../asset/Nevada/rtGUPgLA.jpeg';

import Utah2 from '../../../asset/Utah/Photo Mar 02, 11 17 32 AM.jpg';
import Utah3 from '../../../asset/Utah/Photo Apr 25, 7 08 47 PM.jpg';
import Utah4 from '../../../asset/Utah/Photo Mar 01, 7 20 35 PM.jpg';
import Utah5 from '../../../asset/Utah/Photo Apr 25, 7 11 54 PM.jpg';

import Arizona1 from '../../../asset/Arizona/Photo Oct 13, 3 23 30 PM.jpg';
import Arizona2 from '../../../asset/Arizona/Photo Oct 13, 3 32 56 PM.jpg';
import Arizona3 from '../../../asset/Arizona/Photo Oct 14, 1 03 30 PM.jpg';
import Arizona4 from '../../../asset/Arizona/Photo Oct 14, 1 08 14 PM.jpg';
import Arizona5 from '../../../asset/Arizona/Photo Oct 14, 2 13 25 PM.jpg';

import Colorado1 from '../../../asset/Colorado/6oDn0cLQ.jpeg';
import Colorado2 from '../../../asset/Colorado/hgNTLQqg.jpeg';
import Colorado3 from '../../../asset/Colorado/Photo Dec 29, 1 11 23 PM.jpg';
import Colorado4 from '../../../asset/Colorado/Photo Dec 29, 2 13 48 PM.jpg';
import Colorado5 from '../../../asset/Colorado/Photo Dec 28, 11 47 37 AM.jpg';

import Florida1 from '../../../asset/Florida/DYeGebsw.jpeg';
import Florida2 from '../../../asset/Florida/kVH8g-Mw.jpeg';
import Florida3 from '../../../asset/Florida/W_VJrjvw.jpeg';
import Florida4 from '../../../asset/Florida/X1tmpuRA.jpeg';
import Florida5 from '../../../asset/Florida/Z8drsgkQ.jpeg';

import Louisiana1 from '../../../asset/Louisiana/9d1Zk2Fw.jpeg';
import Louisiana2 from '../../../asset/Louisiana/mFjk_Jn0.jpeg';
import Louisiana3 from '../../../asset/Louisiana/Photo Oct 21, 7 14 32 PM.jpg';
import Louisiana4 from '../../../asset/Louisiana/t4-apD9t.jpeg';

import Ohio1 from '../../../asset/Ohio/Gvpmsr80.jpeg';
import Ohio2 from '../../../asset/Ohio/iG4g2Y93.jpeg';
import Ohio3 from '../../../asset/Ohio/stadium.jpg';

import Hawaii1 from '../../../asset/Hawaii/JV3QkDoJ.jpeg';
import Hawaii2 from '../../../asset/Hawaii/KdR4w0r0.jpeg';
import Hawaii3 from '../../../asset/Hawaii/S3pnuonQ.jpeg';
import Hawaii4 from '../../../asset/Hawaii/SerO4Y3q.jpeg';
import Hawaii5 from '../../../asset/Hawaii/tbTYOXdx.jpeg';
import Hawaii6 from '../../../asset/Hawaii/wNLC9jCA.jpeg';
import Hawaii7 from '../../../asset/Hawaii/zcKumy4d.jpeg';

const travelPhoto = {
    'Washington' : {
        name: 'Washington',
        notes: 'I live in Seattle. There are a lot of good stuffs happening here everyday. Ask me anything about Seattle.',
        photoList: [
            Washington1, Washington2, Washington3, Washington4, Washington5, Washington6
        ]
    },
    'Oregon': {
        name: 'Oregon',
        notes: 'Oregon is nice, especially Portland. We had some great memories in Portland.',
        photoList: [
            Oregon1, Oregon2, Oregon3, Oregon4, Oregon5
        ]
    },
    'California': {
        name: 'California',
        notes: 'We visited California a couple times and got enough sunshine over there.',
        photoList: [
            California1, California2, California3, California4, California5, California6
        ]
    },
    'Idaho': {
        name: 'Idaho',
        notes: 'I visited Idaho in a bus trip, which was a celebration for getting my master degree.',
        photoList: [
            Idaho1, Idaho2, Idaho3, Idaho4
        ]
    },
    'Nevada': {
        name: 'Nevada',
        notes: 'Annual trip to Vegas',
        photoList: [
            Nevada1, Nevada2, Nevada3, Nevada4, Nevada5, Nevada6
        ]
    },
    'Utah': {
        name: 'Utah',
        notes: 'Awesome powders!',
        photoList: [
            Utah2, Utah3, Utah4, Utah5
        ]
    },
    'Arizona': {
        name: 'Arizona',
        notes: 'Good memories with Tabloids.',
        photoList: [
            Arizona1, Arizona2, Arizona3, Arizona4, Arizona5
        ]
    },
    'Colorado': {
        name: 'Colorado',
        notes: 'I need some oxygen...',
        photoList: [
            Colorado1, Colorado3, Colorado2, Colorado4,Colorado5
        ]
    },
    'Florida': {
        name: 'Florida',
        notes: 'I thought I visited in Winter.',
        photoList: [
            Florida1, Florida2, Florida3, Florida4, Florida5
        ]
    },
    'Louisiana': {
        name: 'Louisiana',
        notes: 'Another great Tableau Conference',
        photoList: [
            Louisiana1, Louisiana2, Louisiana3, Louisiana4
        ]
    },
    'Ohio': {
        name: 'Ohio',
        notes: 'My hometown in US',
        photoList: [
            Ohio1, Ohio2, Ohio3
        ]
    },
    'Hawaii': {
        name: 'Hawaii',
        notes: 'ALOHA',
        photoList: [
            Hawaii1, Hawaii2, Hawaii3, Hawaii4, Hawaii5, Hawaii6, Hawaii7
        ]
    }
}

const Travel = () => {

    const [currentSelection, setCurrentSelection] = useState('');

    return (
        <OtherPage title="Travel" qoute="Not all those who wander are lost.  -- J.R.R. Tolkien" backgroundStyle='life-light'>
            <div className={classes.Travel}>
                <div className={currentSelection !== '' && travelPhoto[currentSelection] ? classes.MapHalf : classes.Map}>
                    <Map updateSelection={setCurrentSelection} selection={currentSelection}></Map>
                </div>
                {currentSelection !== '' && travelPhoto[currentSelection] && <PhotoAlbum details={travelPhoto[currentSelection]} />}
            </div>
        </OtherPage>
    );
}

export default Travel;