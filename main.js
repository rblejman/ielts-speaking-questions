import qSets from "./questions.js";
const currentQ = document.querySelector(".qWall__question");
const startBtn = document.querySelector(".start");
const nextBtn = document.querySelector(".next");
const defDelay = [11000, 12000, 13000, 14000];
const answeredSet = [];
let next = false;

// select a random Set of questions, add it to answeredSet Sets then display.
function selectRandom(qSets) {
  let qSet = qSets[Math.floor(Math.random() * qSets.length)];
  const { questions, id } = qSet;
  addAnswered(id);
  showQuestions(questions);
}

// cycle questions with delay
let promise = Promise.resolve();
function showQuestions(questions) {
  questions.forEach(function (item, index) {
    promise = promise.then(function () {
      console.log(item);
      currentQ.innerHTML = `<h2 class="qWall__question">${item}</h2>`;
      startTimer(defDelay[index]);
      return new Promise(function (resolve) {
        setTimeout(resolve, defDelay[index]);

        console.log(`delay of ${defDelay[index]} miliseconds`);
      });
    });
  });
}

promise.then(function () {
  console.log("Loop finished.");
  currentQ.innerHTML = `
  <h2 class="qWall__question">Exam completed!</h2>
  `;
});

// Saving answeredSet question Sets
function addAnswered(id) {
  if (!answeredSet.includes(id)) {
    answeredSet.push(id);
  }
}

// timer
const count = document.querySelector(".countDown");

function startTimer(time) {
  time = time / 1000;
  setInterval(() => {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    count.innerHTML = `${minutes}:${seconds}`;
    time--;
  }, 1000);
}

// start program
startBtn.addEventListener("click", () => {
  selectRandom(qSets);
});
// got to next set of questions
nextBtn.addEventListener("click", () => {
  selectRandom(qSets);
});
