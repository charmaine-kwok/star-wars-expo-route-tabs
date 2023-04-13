import { useCharacterById } from "~hooks/Hooks";
import Loading from "~components/Loading";
import CharacterDetails from "./CharacterDetails";

type RandomCharacterInfoProps = {
  randomNumber: number;
};

// type characterType = {
//   name: string;
//   url: string;
//   gender: string;
//   height: string;
//   birth_year: string;
//   eye_color: string;
//   hair_color: string;
//   skin_color: string;
// };

const RandomCharacterInfo: React.FC<RandomCharacterInfoProps> = (props) => {
  const { data, isFetching, isLoading } = useCharacterById(props.randomNumber);

  if (isFetching || isLoading) {
    return <Loading />;
  }

  console.log("data", data);

  return <CharacterDetails data={data} />;
};

export default RandomCharacterInfo;
