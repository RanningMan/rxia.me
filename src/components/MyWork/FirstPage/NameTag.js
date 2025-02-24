import React, { useContext } from "react";

import classes from "./NameTag.module.css";
import NameBlock from "../../../hoc/NameBlock";
import MyResume from "../../../asset/XIA-Ran-SoftwareDeveloper-Resume.pdf";
import ThemeContext from "../Theme/ThemeContext";
import Separator from "./Separator";

const NameTag = () => {
  const currentTheme = useContext(ThemeContext).themeStyle;

  const themeStyle = {
    Tag: {
      color: currentTheme.secondDominant,
    },
    NameColor: {
      color: currentTheme.secondDominant,
    },
    Download: {
      color: currentTheme.secondDominant,
      backgroundColor: currentTheme.dominant,
      borderColor: currentTheme.thirdDominant,
    },
    DownloadHover: {
      color: currentTheme.secondDominant,
      backgroundColor: currentTheme.thirdDominant,
    },
  };

  const hover = (e) => {
    e.target.style.color = themeStyle.DownloadHover.color;
    e.target.style.backgroundColor = themeStyle.DownloadHover.backgroundColor;
  };

  const unHover = (e) => {
    e.target.style.color = themeStyle.Download.color;
    e.target.style.backgroundColor = themeStyle.Download.backgroundColor;
  };

  return (
    <NameBlock color={themeStyle ? themeStyle.NameColor : classes.NameColor}>
      <div className={classes.Tag} style={themeStyle && themeStyle.Tag}>
        <span>Full Stack</span>
        <Separator color={themeStyle.Tag.color} />
        <span>Data Driven</span>
        <Separator color={themeStyle.Tag.color} />
        <span>AI Enthusiast</span>
        <Separator color={themeStyle.Tag.color} />
        <span>Software Engineer</span>
      </div>
      <div className={classes.DownloadDiv}>
        <a
          href={MyResume}
          className={classes.Download}
          style={themeStyle && themeStyle.Download}
          onMouseOver={hover}
          onMouseLeave={unHover}
        >
          Download My Resume
        </a>
      </div>
    </NameBlock>
  );
};

export default NameTag;
