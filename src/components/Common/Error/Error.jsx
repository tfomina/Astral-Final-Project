import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./Error.less";

export const Error = props => {
  const { className } = props;
  return <div className={clsx(styles.error, className)}>{props.children}</div>;
};

Error.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
