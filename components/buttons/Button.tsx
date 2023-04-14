import Link from "next/link";
import React from "react";
import clsx from "clsx";
import classes from "./Button.module.scss";

interface IProps {
  link: any;
  children: React.ReactNode;
  variant?: string;
}

function ButtonWithLink({ link = "/", children, variant = "secondary" }: IProps) {
  return (
    <Link href={link}>
      <button type="button" className={clsx(classes.button, classes[`variant__${variant}`])}>
        {children}
      </button>
    </Link>
  );
}
function Button({ children, variant = "secondary" }: IProps) {
  return (
    <button type="button" className={clsx(classes.button, classes[`variant__${variant}`])}>
      {children}
    </button>
  );
}

export default ButtonWithLink;
export { Button };
