import React from "react";
import classes from "./HeroSection.module.scss";
import Text from "../text/Text";
import Image from "next/image";
import HeroImg from "../../images/hero_image.webp";
import ButtonWithLink from "../buttons/Button";

function HeroSection() {
  return (
    <section className={classes.hero__section}>
      <div className={classes.hero__container}>
        <div className="classes.hero__info">
          <h1 className={classes.hero__title}>
            Find the perfect
            <span> meal recipe </span>
            for you
          </h1>
          <Text>a listing website of meal recipe</Text>
          <div className={classes.hero__buttons}>
            <ButtonWithLink link={"/meals"} variant="primary">
              Explore Meals
            </ButtonWithLink>
            <ButtonWithLink link={"/saved"}>Saved Meals</ButtonWithLink>
          </div>
        </div>
        <div className={classes.hero__img}>
          <Image className={classes.hero__image} src={HeroImg} alt="Hero Image" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
