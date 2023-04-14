import Link from "next/link";
import React from "react";
import classes from "./Navbar.module.scss";
import Image from "next/image";
import Logo from "../../images/logo.png";

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <Link className={classes.logo} href="/">
        <Image src={Logo} alt="Logo" width={80} height={60} />
      </Link>
      <ul className={classes.navLinks}>
        <li>
          <Link href={"/meals"}>Meals</Link>
        </li>
        <li>
          <Link href={"/savedMeals"}>Saved Lists</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
