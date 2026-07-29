
// Fonction de sauvegarde 

function saveGame(id, nivId,data) {
    const save = data.saves[id]
    const niveauNom = data.levels[nivId]["nom-niveau"]
    save.niveau = niveauNom
    save["niveau-id"] = nivId
}

export default saveGame;