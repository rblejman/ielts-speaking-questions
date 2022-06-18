import qSets from "./questions.js";
const currentQ = document.querySelector(".qWall__question");
const startBtn = document.querySelector(".start");
const defDelay = [10000, 4000, 3000, 2000];
const answered = [];

function showQ(qSets) {
  qSets.forEach((qSet) => {
    const questions = qSet.questions;
    console.log(questions);
    console.log(qSet.id);
    addAnswered(qSet.id);
    questions.forEach((q) => {
      console.log(q);

      let qIndex = questions.indexOf(q);
      console.log(defDelay[qIndex]);
      setTimeout(() => {
        currentQ.innerHTML = `
        <h2 class="qWall__question">${q}</h2>`;
      }, defDelay[qIndex]);
    });
  });
  console.log(answered);
}

// Saving answered question Sets
function addAnswered(id) {
  if (!answered.includes(id)) {
    answered.push(id);
  }
}

// start program
startBtn.addEventListener("click", showQ(qSets));
