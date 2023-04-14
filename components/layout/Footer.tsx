import React from "react";
import classes from "./Footer.module.scss";
import Image from "next/image";
import Logo from "../../images/dea logo.png";
import Text from "../text/Text";

function Footer() {
  return (
    <footer className={classes.footer}>
      <Image src={Logo} alt="Dea's" width={200} style={{ marginBottom: ".8rem" }} />
      <Text>Find the perfect meal recipe for you</Text>
      <Text className={classes.copyright}>© “My-Meals” 2022 All right reserved.</Text>
    </footer>
  );
}

export default Footer;
