import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { colors, Divider } from "@material-ui/core";
import IconAlternate from "./molecules/IconAlternate/IconAlternate";
import Section from "./organisms/Section/Section";
import Welcome from "./components/Welcome/Welcome";
import MadCap from "./components/MadCap/MadCap";
import Parallax from "./organisms/Parallax/Parallax";

import Process from "./components/Process/Process";
import Sauti from "./components/Sauti/Sauti"
import Well from "./components/WellDone/WellDone";
import Revitalized from "./components/Nike/Nike";
import Contact from "./components/Contact/Contact";
import Reviews from "./components/Reviews/Reviews";

import { reviews } from "./data";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
  },
  fullHeight: {
    width: "100%",
    height: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  disablePaddingTop: {
    paddingTop: 0,
  },
  scrollIcon: {
    background: "transparent !important",
    border: `2px solid ${colors.amber[500]}`,
    cursor: "pointer",
  },
  scrollTopIcon: {
    margin: "0 auto",
    marginBottom: theme.spacing(6),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(12),
    },
  },
  madcapSection: {
    backgroundColor: "#0000008a",
  },
  adidasSection: {
    backgroundColor: "#3f0f3f80",
  },
  larqSection: {
    backgroundColor: "#5f3f3f80",
  },
  nikeSection: {
    backgroundColor: "#9d402f80",
  },
}));

const Agency = () => {
  const classes = useStyles();

  const scrollTo = (id) => {
    setTimeout(() => {
      const element = document.querySelector(`#${id}`);
      if (!element) {
        return;
      }

      window.scrollTo({ left: 0, top: element.offsetTop, behavior: "smooth" });
    });
  };
  return (
    <div className={classes.root}>
      <div className={classes.fullHeight}>
        <Section className={classes.disablePaddingTop}
        id="agency-welcome">
          <Welcome />
        </Section>
        <IconAlternate
          shape="circle"
          fontIconClass="fas fa-chevron-down"
          color={colors.amber}
          size="small"
          className={classes.scrollIcon}
          onClick={() => scrollTo("agency-madcap")}
        />
      </div>
      <Parallax
        backgroundImage="/images/photos/blog/fullstackimage.png"
        id="agency-madcap"
      >
        <div className={clsx(classes.fullHeight, classes.madcapSection)}>
          <Section>
            <MadCap />
          </Section>
          <IconAlternate
            shape="circle"
            fontIconClass="fas fa-chevron-down"
            color={colors.amber}
            size="small"
            className={classes.scrollIcon}
            onClick={() => scrollTo("agency-process")}
            data-aos="fade-up"
          />
        </div>
      </Parallax>
      <div className={classes.fullHeight} id="agency-process">
        <Section>
          <Process />
        </Section>
        <IconAlternate
          shape="circle"
          fontIconClass="fas fa-chevron-down"
          color={colors.amber}
          size="small"
          className={classes.scrollIcon}
          onClick={() => scrollTo("agency-adidas")}
          data-aos="fade-up"
        />
      </div>
      <Parallax
        backgroundImage="/images/photos/blog/sautifig.png"
        id="agency-adidas"
      >
        <div className={clsx(classes.fullHeight, classes.adidasSection)}>
          <Section>
            <Sauti />
          </Section>
          <IconAlternate
            shape="circle"
            fontIconClass="fas fa-chevron-down"
            color={colors.amber}
            size="small"
            className={classes.scrollIcon}
            onClick={() => scrollTo("agency-larq")}
            data-aos="fade-up"
          />
        </div>
      </Parallax>
      <Parallax
        backgroundImage="/images/photos/blog/sautifig.png"
        id="agency-adidas"
      >
        <div className={clsx(classes.fullHeight, classes.adidasSection)}>
          <Section>
            <Sauti />
          </Section>
          <IconAlternate
            shape="circle"
            fontIconClass="fas fa-chevron-down"
            color={colors.amber}
            size="small"
            className={classes.scrollIcon}
            onClick={() => scrollTo("agency-larq")}
            data-aos="fade-up"
          />
        </div>
      </Parallax>
      <Parallax
        backgroundImage="/images/photos/blog/welldrop.png"
        id="agency-larq"
      >
        <div className={clsx(classes.fullHeight, classes.larqSection)}>
          <Section>
            <Well />
          </Section>
          <IconAlternate
            shape="circle"
            fontIconClass="fas fa-chevron-down"
            color={colors.amber}
            size="small"
            className={classes.scrollIcon}
            onClick={() => scrollTo("agency-nike")}
            data-aos="fade-up"
          />
        </div>
      </Parallax>
      <Parallax
        backgroundImage="/images/photos/blog/revit.png"
        id="agency-nike"
      >
        <div className={clsx(classes.fullHeight, classes.nikeSection)}>
          <Section>
            <Revitalized />
          </Section>
          <IconAlternate
            shape="circle"
            fontIconClass="fas fa-chevron-down"
            color={colors.amber}
            size="small"
            className={classes.scrollIcon}
            onClick={() => scrollTo("agency-contact")}
            data-aos="fade-up"
          />
        </div>
      </Parallax>
      <Parallax
        id="agency-contact"
      >
      <Divider />
      <div className={classes.fullHeight}>
      <Section>
        <Contact />
      </Section>
      <IconAlternate
        shape="circle"
        fontIconClass="fas fa-chevron-up"
        color={colors.amber}
        size="small"
        className={clsx(classes.scrollIcon, classes.scrollTopIcon)}
        onClick={() => scrollTo("agency-welcome")}
        data-aos="fade-up"
      />
      <Divider />
      </div>
      </Parallax>
    </div>
  );
};

export default Agency;
