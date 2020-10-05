import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import SectionHeader from "../../molecules/SectionHeader/SectionHeader";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Contact = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const github = "https://github.com/surfsol";
  const linkedIn = "https://www.linkedin.com/in/russell-terry-dev";

  return (
    <div className={clsx("jarallax", classes.root, className)} {...rest}>
      <SectionHeader
        title="Get in touch"
        subtitle="Email: surfsol@protonmail.com"
        ctaGroup={[
          <a href={github} target="_blank">
            GITHUB
          </a>,
          <a href={linkedIn} target="_blank">
            LINKEDIN
          </a>,
        ]}
        data-aos="fade-up"
      />
    </div>
  );
};

Contact.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Contact;
