import qSets from "./questions.js";
console.log(qSets);

const currentQ = document.querySelector(".qWall__question");

function showQ(qSets) {
  qSets.forEach((qSet) => {
    currentQ.innerHTML = `
    <h2 class="qWall__question">${qSet.q1}</h2>
    `;
    setTimeout(10000);
    currentQ.innerHTML = `
    <h2 class="qWall__question">${qSet.q2}</h2>
    `;
    setTimeout(10000);
    currentQ.innerHTML = `
    <h2 class="qWall__question">${qSet.q3}</h2>
    `;
    setTimeout(10000);
  });
}

showQ(qSets);
