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

  return (
    <div className={clsx('jarallax', classes.root, className)} {...rest}>
      <SectionHeader
        title="Russell Terry"
        textAdd="Crafting modern web applications."
        titleVariant="h2"
        subtitle="FullStack Web Developer"
        ctaGroup={[
          <Button variant="contained" color="primary" size="large">
            Contact me
          </Button>,
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
