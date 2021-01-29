export const cyclades = {
  id: 1,
  description:
    "Cyclades est un jeu pour 2 à 5 joueurs. Chaque joueur est le chef d'une cité-état de la Grèce antique et doit s'assurer que sa cité aura la prédominance dans les cyclades. Le but du jeu est d'être le premier qui possèdera deux métropoles.",
  price: 32,
  name: "Cyclades",
  picture: require("@/assets/cyclades.png")
};
export const smallWorld = {
  id: 2,
  description:
    "Dans Small World, les joueurs luttent pour conquérir les régions d'un monde où il n'y a pas de place pour tous ! Conçu par Philippe Keyaerts dans la droite ligne du jeu Vinci™, primé à plusieurs reprises, Small World plongera les joueurs dans un monde habité par des nains, des mages, des amazones, des géants, des orcs et même des humains.",
  price: 17.5,
  name: "Small World",
  picture: require("@/assets/small-world.jpg")
};

export const dominion = {
  id: 3,
  description:
    "Dominion est un jeu de cartes, où l'on constitue son deck en jouant. Le principe est le suivant : vous êtes un roi qui veut écraser par sa puissance les autres rois (en somme avoir le plus de points de victoire à la table). Les cartes vont donc représenter cette ascension.",
  price: 23.5,
  name: "Dominion",
  picture: require("@/assets/dominion.jpg")
};

export const inventory = [cyclades, smallWorld, dominion];
