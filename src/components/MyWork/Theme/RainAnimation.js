import React from 'react';

import classes from './RainAnimation.module.css';

const Drop = ({rand1, rand2, increment}) => {
    const styles = {
        drop: {
            left: `${increment}%`,
            bottom: `${rand1 + rand2 - 1 + 100}%`,
            animationDelay: `0.${rand1}s`,
            animationDuration: `0.5${rand2}s`
        },
        stem: {
            animationDelay: `0.${rand1}s`,
            animationDuration: `0.5${rand1}s`
        }
    }
    return (
        <div className={classes.Drop} style={styles.drop}>
            <div className={classes.Stem} style={styles.stem}></div>
        </div>
    )
}

const Drops = () => {
     
    let increment = 0;
    let drops = [];
  
    while (increment < 100) {
      //couple random numbers to use for various randomizations
      //random number between 98 and 1
      var rand1 = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
      //random number between 3 and 2
      var rand2 = (Math.floor(Math.random() * (3 - 2 + 1) + 2));
      //increment
      increment += rand2;
      //add in a new raindrop with various randomizations to certain CSS properties
      drops.push(<Drop key={increment} rand1={rand1} rand2={rand2} increment={increment} />)
    }
  
    return drops;
  }

const Rain = () => {
    return <div className={classes.Rain}>
        <Drops />
    </div>
}

export default Rain;