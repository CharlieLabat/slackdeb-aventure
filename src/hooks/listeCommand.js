import Donnee from "./donnee";
import saveGame from "./saveGame";


function listeCommand(cmdEle) {
    // Liste des commandes valide selon le niveau courant
    const listeCmd = Donnee.levels[cmdEle[2]]["liste-cmd"]
    const cmdExiste = listeCmd.some((e) => e.cmd === cmdEle[0])
    console.log(listeCmd)
    console.log(cmdExiste)
    console.log(cmdEle)
    // Si la commande est dans la liste des commandes du niveau et qui est gere ...
    if (cmdExiste) {
        switch (cmdEle[0]) {
            case "start": // Commence le jeu (Uniquement l'écran d'accueil)
                console.log("Lestgo !!!")
                Donnee.saves[0]["niveau-id"] = 1
                break
            case "save": // Sauvegarde le jeu
                saveGame(cmdEle[1], cmdEle[2])
                break

            case "load": // Charge le jeu
                break
            default:
                console.log("La commande n'existe pas !")
                break;
        }
    }

}
export default listeCommand;