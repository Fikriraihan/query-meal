import React from "react";
import classes from "./meals.module.scss";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Text from "../../../components/text/Text";
import { BeatLoader } from "react-spinners";
import Image from "next/image";
import Title from "../../../components/text/Title";
import PointText from "../../../components/text/PointText";
import IngredientsTable from "../../../components/mealsPage/IngredientsTable";

const getSingleMeal = async ({ queryKey }: any) => {
  const { data } = await axios.get(`/lookup.php?i=${queryKey[1]}`);
  return data?.meals?.[0];
};

function SingleMealPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError, error }: any = useQuery(["singleMeal", id], getSingleMeal);

  if (isError) {
    return <Text>{error.message}</Text>;
  }

  if (isLoading || !data) {
    return <BeatLoader color="#fff" />;
  }

  const ingredients = Object.keys(data)
    .filter((key) => key.startsWith("strIngredient"))
    .filter((key) => data[key] !== "" && data[key] !== null);
  //   console.log("ingredients", ingredients);

  const ingredientsWithMeasures = ingredients.map((key, index) => ({
    index: index + 1,
    ingredient: data[`strIngredient${index + 1}`],
    measure: data[`strMeasure${index + 1}`],
  }));
  //   console.log("measure", ingredientsWithMeasure);
  //   console.log("data", data);

  return (
    <div className={classes.pageWrapper}>
      <div className={classes.topContainer}>
        <div className={classes.img}>
          <Image src={data.strMealThumb} height={300} width={300} alt="Detail Image"></Image>
        </div>
        <div className={classes.info}>
          <Title variant="primary">{data.strMeal}</Title>
          <PointText className={classes.infoText}>Category: {data.strCategory}</PointText>
          <PointText className={classes.infoText}>Area: {data.strArea}</PointText>
          <PointText className={classes.infoText}>Tags: {data?.strTags.split(",").join(",")}</PointText>
        </div>
      </div>
      <div className={classes.ingredientsTable}>
        <IngredientsTable ingredientsWithMeasures={ingredientsWithMeasures} />
      </div>
      <div className={classes.instructions}>
        <Title>Instructions</Title>
        {data.strInstructions
          .split(".")
          .filter((sentence: any) => sentence !== "")
          .map((sentence: any) => (
            <PointText key={sentence}>{sentence}</PointText>
          ))}
      </div>
    </div>
  );
}

export default SingleMealPage;
