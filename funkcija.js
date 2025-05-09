const jautaajumi = [
  {
    jautajums: "Kura no šīm valstīm nav Apvienoto Nāciju Organizācijas dalībvalsts?",
    opcijas: {
      A: "Šveice",
      B: "Irāna",
      C: "Vatikāns",
      D: "Ziemeļkoreja"
    },
    correct: "C"
  },
  {
    jautajums: "Kura planēta Solārajā sistēmā ir vistālāk no saules?",
    opcijas: {
      A: "Neptūns",
      B: "Vēna",
      C: "Saturns",
      D: "Jupiters"
    },
    correct: "A"
  },
  {
    jautajums: "Kura upe ir garākā pasaulē?",
    opcijas: {
      A: "Nīla",
      B: "Amazone",
      C: "Misisipi",
      D: "Jandzi"
    },
    correct: "A"
  },
  {
    jautajums: "Kura daļiņa atrodas atomu kodolā kopā ar protoniem?",
    opcijas: {
      A: "Elektrons",
      B: "Neitrons",
      C: "Kvarks",
      D: "Fotons"
    },
    correct: "B"
  },
  {
    jautajums: "Kurš ir vispopulārākais sports pasaulē?",
    opcijas: {
      A: "Futbols",
      B: "Basketbols",
      C: "Vieglatlētika",
      D: "Teniss"
    },
    correct: "A"
  },
  {
    jautajums: "Kurai valstij ir vislielākais iedzīvotāju skaits pasaulē?",
    opcijas: {
      A: "Indija",
      B: "Ķīna",
      C: "Amerikas Savienotās Valstis",
      D: "Indonēzija"
    },
    correct: "C"
  },
  {
    jautajums: "Kura no vielām NAV sāls?",
    opcijas: {
      A: "KNO₃",
      B: "CaSO₄",
      C: "MgCl₂",
      D: "H₂SO₄"
    },
    correct: "D"
  }
];

let pareizoSkaits = 0;
let jautajumaIndex = 0; // pašreizējais jautājums
let atbildets = false; // neļauj izvēlēties vairākus atbilžu variantus priekš viena

// ielādē un parāda pašreizējo jautājumu
function ladetJaut() {
  const q = jautaajumi[jautajumaIndex]; // Paņem pašreizējo jautājumu
  document.getElementById('jautajums').textContent = q.jautajums; // Rāda jautājuma tekstu

  const optionsList = document.getElementById('opcijas');
  optionsList.innerHTML = ''; // notīra iepriekšējās atbildes

  // Cikls caur atbilžu variantiem
  for (const key in q.opcijas) {
    const li = document.createElement('li');
    const btn = document.createElement('button');

    btn.textContent = `${key}. ${q.opcijas[key]}`;
    btn.onclick = () => checkAnswer(key);

    li.appendChild(btn);
    optionsList.appendChild(li);
  }

  document.getElementById('result').textContent = '';
  document.getElementById('nakamais').style.display = 'none'; 
  atbildets = false;
}

// Apstrādā lietotāja atbildi
function checkAnswer(choice) {
  if (atbildets) return;
  atbildets = true;

  const q = jautaajumi[jautajumaIndex];
  const result = document.getElementById('result');

  if (choice === q.correct) {
    result.textContent = 'Pareizi!';
    result.style.color = 'green';
    pareizoSkaits++; // skaita pareizas atbildes
  } else {
    result.textContent = `Nepareizi! Pareizā atbilde ir ${q.opcijas[q.correct]}.`;
    result.style.color = 'red';
  }

  document.getElementById('nakamais').style.display = 'inline-block'; 
}

// Ielādē nākamo jautājumu vai beidz testu
function nextQuestion() {
  jautajumaIndex++;

  if (jautajumaIndex < jautaajumi.length) {
    ladetJaut();
  } else {
    document.querySelector('.quiz-container').innerHTML = `
      <h2>Tests pabeigts!</h2>
      <p>Tu atbildēji pareizi uz ${pareizoSkaits} no ${jautaajumi.length} jautājumiem.</p>
    `;
  }
}

// Ielādē pirmo jautājumu, kad lapa ir gatava
window.onload = ladetJaut;

