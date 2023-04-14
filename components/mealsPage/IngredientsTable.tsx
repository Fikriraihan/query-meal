import React from "react";
import Title from "../text/Title";
import classes from "./IngredientsTable.module.scss";
import Text from "../text/Text";

function IngredientsTable({ ingredientsWithMeasures }: any) {
  return (
    <>
      <Title className={classes.title}>Ingredients</Title>
      <table className={classes.ingredientsTable}>
        <tbody>
          {ingredientsWithMeasures.map((ingredient: any) => (
            <tr key={ingredient.index}>
              <td>
                <Text>{ingredient.ingredient}</Text>
              </td>
              <td>
                <Text>{ingredient.measure}</Text>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default IngredientsTable;
