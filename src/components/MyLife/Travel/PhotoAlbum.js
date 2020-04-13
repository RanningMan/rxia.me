import React from 'react';

import classes from './PhotoAlbum.module.css';

const PhotoAlbum = (props) => (
    <div className={classes.PhotoAlbum}>
        <h4 className={classes.Title}>{props.details.name}</h4>
        <div className={classes.PhotoList}>
            {
                props.details.photoList.map((url, key) => 
                    <div key={key} className={classes.Photo}>
                        <img src={url} alt="missing" />
                    </div>
                )
            }
        </div>
        <p className={classes.Notes}>{props.details.notes}</p>
    </div>
);

export default PhotoAlbum;