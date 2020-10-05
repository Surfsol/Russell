import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import  SectionHeader  from '../../molecules/SectionHeader/SectionHeader';

const useStyles = makeStyles(theme => ({
  root: {},
}));

const Process = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx('jarallax', classes.root, className)} {...rest}>
      <SectionHeader
        title="Tecnologies"
        titleVariant="h2"
        subtitle="Frontend: React, React Native, Typescript, Graphql, Apollo, Material-Ui, D3.js, Jest, Javascript, PHP, HTML, CSS"
        subtitle2="Backend: NodeJS, Express, GraphQL, Apollo, Knex, REST, Jest Testing, Python"
        subtitle3="Architecture: AWS Amplify, AWS Elastic BeanStalk, PostgreSQL, MySQL"
        disableGutter
        data-aos="fade-up"
      />
    </div>
  );
};

Process.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Process;
