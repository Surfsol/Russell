import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import  SectionHeader  from '../../molecules/SectionHeader/SectionHeader';
import { NavLink } from "react-router-dom";


const useStyles = makeStyles(theme => ({
  root: {},
  textWhite: {
    color: 'white',
    textTransform: 'uppercase',
  },
}));

const WellDone = props => {
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
          <NavLink variant="outlined" color="secondary" size="large" to={`/project/welldone`}>
            See portfolio
          </NavLink>
          </Button>,
        ]}
        disableGutter
        data-aos="fade-up"
      />
    </div>
  );
};

WellDone.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default WellDone;
