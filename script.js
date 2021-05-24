const QUESTIONS = [
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
console.log(QUESTIONS);

let RESULTAT = 0;

const QUESTION1 = prompt(
  'A quel compositeur est consacré le film Amadeus ?\n1. Beethoven\n2. Mozart'
);
if (QUESTION1 === '1') {
  alert('mauvaise réponse');
  RESULTAT += 0;
} else if (QUESTION1 === '2') {
  alert('bonne réponse');
  RESULTAT += 1;
} else {
  alert('veuillez répondre par 1 ou par 2');
  RESULTAT += 0;
  prompt(
    'A quel compositeur est consacré le film Amadeus ?\n1. Beethoven\n2. Mozart'
  );
  if (QUESTION1 === '1') {
    alert('mauvaise réponse');
    RESULTAT += 0;
  } else if (QUESTION1 === '2') {
    alert('bonne réponse');
    RESULTAT += 1;
  } else {
    alert('Bon on vous avais prévenu, la ça fait 0 point !');
    RESULTAT += 0;
  }
}
const QUESTION2 = prompt(
  "Quelle est la capitale de l'Autriche ?\n1. Vienne\n2. Oslo"
);
if (QUESTION2 === '1') {
  alert('bonne réponse');
  RESULTAT += 1;
} else if (QUESTION2 === '2') {
  alert('mauvaise réponse');
  RESULTAT += 0;
} else {
  alert('veuillez répondre par 1 ou par 2');
  RESULTAT += 0;
  prompt("Quelle est la capitale de l'Autriche ?\n1. Vienne\n2. Oslo");
  if (QUESTION2 === '1') {
    alert('mauvaise réponse');
    RESULTAT += 0;
  } else if (QUESTION2 === '2') {
    alert('bonne réponse');
    RESULTAT += 1;
  } else {
    alert('Bon on vous avais prévenu, la ça fait 0 point !');
    RESULTAT += 0;
  }
}
const QUESTION3 = prompt(
  'Quel organe est perturbé par les acouphènes ?\n1. Les Pieds\n2. Les Oreilles'
);
if (QUESTION3 === '1') {
  alert('mauvaise réponse');
  RESULTAT += 0;
} else if (QUESTION3 === '2') {
  alert('bonne réponse');
  RESULTAT += 1;
} else {
  alert('veuillez répondre par 1 ou par 2');
  RESULTAT += 0;
  prompt(
    'Quel organe est perturbé par les acouphènes ?\n1. Les Pieds\n2. Les Oreilles'
  );
  if (QUESTION3 === '1') {
    alert('mauvaise réponse');
    RESULTAT += 0;
  } else if (QUESTION3 === '2') {
    alert('bonne réponse');
    RESULTAT += 1;
  } else {
    alert('Bon on vous avais prévenu, la ça fait 0 point !');
    RESULTAT += 0;
  }
}

if (RESULTAT <= 1) {
  alert(`Vous avez ${RESULTAT} bonne réponse !`);
} else {
  alert(`Vous avez ${RESULTAT} bonnes réponses !`);
}
