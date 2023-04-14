import React from "react";
import classes from "./About.module.scss";
import Title from "../text/Title";
import Text from "../text/Text";

function About() {
  return (
    <div className={classes.about}>
      <Title className={classes.title}>Dea&apos;s Recipe</Title>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aspernatur praesentium quaerat, suscipit tempore sint dolorem nesciunt rerum quis molestiae, distinctio sapiente quisquam sed et nostrum quod sunt illum maiores.{" "}
        <br /> <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut iusto, voluptates exercitationem non fuga reprehenderit quasi eaque. Quam quae praesentium quod ipsa vel, iste ab deleniti rerum alias incidunt magnam.
      </Text>
    </div>
  );
}

export default About;
