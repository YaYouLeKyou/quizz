let QUESTIONS = [
  {
    question:
      'A quel compositeur est consacré le film Amadeus ?\n1. Beethoven\n2. Mozart',
    reponse: 2,
  },
  {
    question: "Quelle est la capitale de l'Autriche ?\n1. Vienne\n2. Oslo",
    reponse: 1,
  },
  {
    question:
      'Quel organe est perturbé par les acouphènes ?\n1. Les Pieds\n2. Les Oreilles',
    reponse: 2,
  },
];

let RESULTAT = 0;

for (let i = 0; i < QUESTIONS.length; i += 1) {
  let REPONSES = prompt(QUESTIONS[i].question);
  if (REPONSES == QUESTIONS[i].reponse) {
    alert('bonne réponse');
    RESULTAT += 1;
  } else {
    alert('mauvaise réponse');
    RESULTAT += 0;
  }
}
if (RESULTAT <= 1) {
  alert(`Vous avez ${RESULTAT} bonne réponse sur ${QUESTIONS.length} !`);
} else {
  alert(`Vous avez ${RESULTAT} bonnes réponses sur ${QUESTIONS.length} !`);
}
