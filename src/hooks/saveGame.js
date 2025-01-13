
import Donnee from "../data/data.json";
// Fonction de sauvegarde 
function saveGame(id, nivId){
 const save = Donnee.saves[id]
 const niveauNom = Donnee.levels[nivId]["nom-niveau"]
 save.niveau = niveauNom
 save["niveau-id"] = nivId
}

export default saveGame;