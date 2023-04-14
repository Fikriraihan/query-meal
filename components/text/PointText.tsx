import React from "react";
import classes from "./PointText.module.scss";
import clsx from "clsx";
import Text from "./Text";

interface IProps {
  className?: string;
  children: React.ReactNode;
}

function PointText({ className, children }: IProps) {
  return (
    <div className={clsx(classes.pointText, className)}>
      <div className={classes.circle}></div>
      <Text>{children}</Text>
    </div>
  );
}

export default PointText;
