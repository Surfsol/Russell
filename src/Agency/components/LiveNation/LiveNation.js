import React from 'react';
import clsx from 'clsx';
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

const LiveNation = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title={<span className={classes.textWhite}>Live Nation</span>}
        titleVariant="h1"
        subtitle={
          <span className={classes.textWhite}>
            React-Native OTT app
          </span>
        }
        
        disableGutter
        data-aos="fade-up"
      />
    </div>
  );
};

export default LiveNation;
