import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import  SectionHeader  from '../../molecules/SectionHeader/SectionHeader';

const useStyles = makeStyles(theme => ({
  root: {},
}));

const Welcome = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const github = "https://github.com/surfsol";
  const linkedIn = "https://www.linkedin.com/in/russell-terry-dev";


  return (
    <div className={clsx('jarallax', classes.root, className)} {...rest}>
      <SectionHeader
        title="Russell Terry"
        textAdd="Crafting modern web applications."
        titleVariant="h2"
        subtitle="FullStack Web Developer"
        subtitle2="Email: surfsol@protonmail.com"
        ctaGroup={[
          <a href={github} target="_blank">
            GITHUB
          </a>,
          <a href={linkedIn} target="_blank">
            LINKEDIN
          </a>,
        ]}
        disableGutter
        data-aos="fade-up"
      />
    </div>
  );
};

Welcome.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Welcome;
