import React from "react";
import classes from "./SingleMealCard.module.scss";
import Link from "next/link";
import Image from "next/image";
import Title from "../text/Title";

function SingleMealCard({ meal }: any) {
  return (
    <Link className={classes.item} href={`/meals/${meal.idMeal}`}>
      <Image src={meal.strMealThumb} height="200" width="200" alt="Meal Card" />
      <Title className={classes.title} variant="secondary">
        {meal.strMeal}
      </Title>
    </Link>
  );
}

export default SingleMealCard;
