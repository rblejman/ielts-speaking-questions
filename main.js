import qSets from "./questions.js";
const currentQ = document.querySelector(".qWall__question");
const startBtn = document.querySelector(".start");
const nextBtn = document.querySelector(".next");
const defDelay = [1, 4000, 3000, 2000];
const answered = [];
let next = false;

// select a random Set of questions
function selectRandom(qSets) {
  let qSet = qSets[Math.floor(Math.random() * qSets.length)];
  const { questions, id } = qSet;
  addAnswered(id);
  showQuestions(questions);
}

// cycle questions
function showQuestions(questions) {
  questions.forEach((q) => {
    qIndex = questions.indexOf(q);
    console.log(q);
    console.log(defDelay[qIndex]);
    currentQ.innerHTML = `
          <h2 class="qWall__question">${q}</h2>`;
    // countdown pasarle el index de la pregunta
  });
}

// Saving answered question Sets
function addAnswered(id) {
  if (!answered.includes(id)) {
    answered.push(id);
  }
}

function countdown() {}

// start program
startBtn.addEventListener("click", () => {
  selectRandom(qSets);
});
// got to next set of questions
nextBtn.addEventListener("click", () => {
  selectRandom(qSets);
});
