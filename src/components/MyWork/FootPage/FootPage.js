import React, { useContext } from "react";

import Row from "react-bootstrap/Row";

import classes from "./FootPage.module.css";
import ThemeContext from "../Theme/ThemeContext";

const Foot = () => {
  const currentTheme = useContext(ThemeContext).themeStyle;

  const themeStyle = {
    FootPage: {
      backgroundColor: currentTheme.lastDominant,
    },
  };

  return (
    <Row className={classes.FootPage} style={themeStyle.FootPage}>
      <p className={classes.FootTag}>@2025 by Ran Xia</p>
    </Row>
  );
};

export default Foot;
