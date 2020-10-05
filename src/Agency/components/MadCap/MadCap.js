import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import SectionHeader from "../../molecules/SectionHeader/SectionHeader";

const useStyles = makeStyles((theme) => ({
  root: {},
  textWhite: {
    color: "white",
    textTransform: "uppercase",
  },
}));

const MadCap = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title={<span className={classes.textWhite}>FullStack Developer</span>}
        titleVariant="h1"
        disableGutter
        data-aos="fade-up"
      />
    </div>
  );
};

MadCap.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default MadCap;
