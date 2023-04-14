import React from "react";
import classes from "./Categories.module.scss";
import { BeatLoader } from "react-spinners";
import CategoryItem from "./CategoryItem";

export default function Categories({ categories, categoriesIsLoading, categoriesIsError, selectedCategory, setSelectedCategory, setQuery, setSearchText }: any) {
  if (categoriesIsLoading) {
    return <BeatLoader loading={categoriesIsLoading} color="#fff" />;
  }
  if (categoriesIsError) {
    return <div>error</div>;
  }

  return (
    <div className={classes.categories__container}>
      {categories &&
        categories.map((item: any) => (
          <CategoryItem
            category={item}
            key={item.idCategory}
            selectedCategory={selectedCategory}
            onClickHandler={() => {
              setSelectedCategory(item.strCategory);
              setQuery("");
            }}
          />
        ))}
    </div>
  );
}
