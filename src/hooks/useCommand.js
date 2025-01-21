import Donnee from "../data/data.json";
import saveGame from "./saveGame";


function useCommand(cmd, texte, id) {
    const listeCmd = Donnee.levels[id]["liste-cmd"]
    switch (cmd) {
        case "start":
            
            break
        case "save":
            saveGame(texte,id)
            break
        default:
            console.log("La commande n'existe pas !")
            break;
    }


    return null;
}
export default useCommand;