import React, { useState } from 'react';

import classes from './Book.module.css';

const Book = (props) => {

    const [isFront, setIsFront] = useState(true);

    const bookClickHandler = () => {
        let curIsFront = isFront;
        setIsFront(!curIsFront);
    }

    return (
        <div className={classes.Wrap} onClick={bookClickHandler}>
            <div className={classes.Perspective}>
                <div className={isFront ? classes.BookWrapFront : classes.BookWrapBack}>
                    <img src={props.bookImgUrl} alt={props.bookName} className={classes.Book}></img>
                    <div className={classes.BookBack}>
                        <div className={classes.Text}>
                            <h3>{props.bookName}</h3>
                            <p>{props.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Book;