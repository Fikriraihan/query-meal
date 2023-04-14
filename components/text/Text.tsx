import clsx from "clsx";
import React from "react";
import classes from "./Text.module.scss";

interface IProps {
  children: React.ReactNode;
  className?: any;
}

function Text({ children, className }: IProps) {
  return <p className={clsx(classes.text, className)}>{children}</p>;
}

export default Text;
