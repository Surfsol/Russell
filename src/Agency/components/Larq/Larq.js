import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import  SectionHeader  from '../../molecules/SectionHeader/SectionHeader';

const useStyles = makeStyles(theme => ({
  root: {},
  textWhite: {
    color: 'white',
    textTransform: 'uppercase',
  },
}));

const Larq = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title={<span className={classes.textWhite}>WellDone</span>}
        titleVariant="h1"
        subtitle={<span className={classes.textWhite}>Well Pump Management Application</span>}
        ctaGroup={[
          <Button variant="outlined" color="secondary" size="large">
            See portfolio
          </Button>,
        ]}
        disableGutter
        data-aos="fade-up"
      />
    </div>
  );
};

Larq.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Larq;
