import CharacterDetails from "./CharacterDetails";
import { currentDetailCharacterDataAtom } from "../../atoms/currentData/characterData";
import { useAtom } from "jotai";

const CharacterInfo: React.FC = (props) => {
  console.log("In Character Info");
  const [currentDetailCharacterData, setCurrentDetailCharacterData] = useAtom(
    currentDetailCharacterDataAtom
  );

  console.log(props);
  console.log("currentDetailCharacterData", currentDetailCharacterData);

  return <CharacterDetails data={currentDetailCharacterData} />;
};

export default CharacterInfo;
