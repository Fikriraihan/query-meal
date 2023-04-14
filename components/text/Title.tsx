import clsx from "clsx";
import React from "react";
import classes from "./Title.module.scss";

interface IProps {
  children: React.ReactNode;
  className?: string;
  variant?: string;
}

function Title({ children, className, variant = "primary" }: IProps) {
  return <h2 className={clsx(classes.title, className, classes[`title__${variant}`])}>{children}</h2>;
}

export default Title;
