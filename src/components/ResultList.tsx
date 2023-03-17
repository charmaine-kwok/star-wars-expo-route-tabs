import { useAtom } from "jotai";
import React from "react";
import CharacterList from "./character/CharacterList";
import FilmList from "./film/FilmList";
// import SpeciesList from "./species/SpeciesList";
// import { categoryAtom } from "../atoms/category";

type ResultListProps = {
  searchName: string;
  page: string;
  category: string;
};

const ResultList: React.FC<ResultListProps> = (props) => {
  console.log(props);
  console.log(props.searchName);

  // const [category, setCategory] = useAtom(categoryAtom);

  switch (props.category) {
    // case "Films":
    //   return <FilmList searchName={props.searchName} />;

    case "Characters":
      console.log("it's a character");
      return <CharacterList searchName={props.searchName} page={props.page} />;

    // case "species":
    //   return <SpeciesList searchName={props.searchName} />;
  }
};

export default ResultList;
