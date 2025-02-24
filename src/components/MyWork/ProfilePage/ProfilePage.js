import React, { useContext } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import OtherPage from "../../../hoc/OtherPage";
import AboutMe from "./AboutMe";
import Photo from "./Photo";
import Contact from "./Contact";
import ThemeContext from "../Theme/ThemeContext";
import { cloudyWeather } from "../Theme/ThemeHelper";
import ThemeType from "../Theme/ThemeType";
import classes from "./ProfilePage.module.css";
import RanPhoto from "../../../asset/Ran.jpg";

const aboutMeContent = `I'm a versatile software engineer with diverse interests and skills. I thrive on creating innovative products that empower people through state-of-the-art technologies, all while collaborating with an exceptional team.`;

const Profile = () => {
  const themeContext = useContext(ThemeContext);
  const weather = themeContext.weather;
  const weatherTheme =
    localStorage.getItem("preferredTheme") === ThemeType.WEATHER;

  const style = {
    color: weatherTheme && cloudyWeather(weather) ? "white" : "#434242",
  };

  return (
    <OtherPage
      title="Profile"
      qoute="I'm a data driven full stack software engineer."
      backgroundStyle="resume-light"
    >
      <Row className={classes.ProfilePage} style={style}>
        <Col md={4}>
          <AboutMe content={aboutMeContent} />
        </Col>
        <Col md={3} style={{ alignSelf: "center" }}>
          <Photo src={RanPhoto} />
        </Col>
        <Col md={4}>
          <Contact />
        </Col>
      </Row>
    </OtherPage>
  );
};

export default Profile;
