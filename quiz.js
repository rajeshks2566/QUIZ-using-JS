let user = prompt("Enter your Full Name");

// !questions
let q1 = document.getElementById("div1");
let q2 = document.getElementById("div2");
let q3 = document.getElementById("div3");
let q4 = document.getElementById("div4");
let q5 = document.getElementById("div5");
let q6 = document.getElementById("div6");
let q7 = document.getElementById("div7");
let q8 = document.getElementById("div8");

//! Buttons
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let result = document.getElementById("result");

// !make que and button  hidden except q1
q2.style.visibility = "hidden";
q3.style.visibility = "hidden";
q4.style.visibility = "hidden";
q5.style.visibility = "hidden";
q6.style.visibility = "hidden";
q7.style.visibility = "hidden";
q8.style.visibility = "hidden";

// !every button invisible except btn1
btn2.style.visibility = "hidden";
btn3.style.visibility = "hidden";
btn4.style.visibility = "hidden";
btn5.style.visibility = "hidden";
btn6.style.visibility = "hidden";
btn7.style.visibility = "hidden";
btn8.style.visibility = "hidden";
result.style.visibility = "hidden";

//
var score = 0;

// 1st question function
function m1() {
  q1.style.visibility = "hidden";
  q2.style.visibility = "visible";
  btn1.style.visibility = "hidden";
  btn2.style.visibility = "visible";
  if (document.getElementById("correct1").checked) {
    score++;
  }
}

// 2nd question function
function m2() {
  q2.style.visibility = "hidden";
  q3.style.visibility = "visible";
  btn2.style.visibility = "hidden";
  btn3.style.visibility = "visible";
  if (document.getElementById("correct2").checked) {
    score++;
  }
}

// 3rd question function
function m3() {
  q3.style.visibility = "hidden";
  q4.style.visibility = "visible";
  btn3.style.visibility = "hidden";
  btn4.style.visibility = "visible";
  if (document.getElementById("correct3").checked) {
    score++;
  }
}

// 4th question function
function m4() {
  q4.style.visibility = "hidden";
  q5.style.visibility = "visible";
  btn4.style.visibility = "hidden";
  btn5.style.visibility = "visible";
  if (document.getElementById("correct4").checked) {
    score++;
  }
}

// 5th question function
function m5() {
  q5.style.visibility = "hidden";
  q6.style.visibility = "visible";
  btn5.style.visibility = "hidden";
  btn6.style.visibility = "visible";
  if (document.getElementById("correct5").checked) {
    score++;
  }
}

// 6th question function
function m6() {
  q6.style.visibility = "hidden";
  q7.style.visibility = "visible";
  btn6.style.visibility = "hidden";
  btn7.style.visibility = "visible";
  if (document.getElementById("correct6").checked) {
    score++;
  }
}

// 7th question function
function m7() {
  q7.style.visibility = "hidden";
  q8.style.visibility = "visible";
  btn7.style.visibility = "hidden";
  btn8.style.visibility = "visible";
  if (document.getElementById("correct7").checked) {
    score++;
  }
}

// 8th question function
let resDiv = document.getElementById("resDiv");
function m8() {
  if (document.getElementById("correct8").checked) {
    score++;
  }
  q8.style.visibility = "hidden";
  btn8.style.visibility = "hidden";
  resDiv.innerHTML = `<h2>Successfully Completed</h2><br><h2>Check Your Results</h2>`;
  resDiv.style.border = "2px solid";
  resDiv.style.background = "#80808055";
  resDiv.style.boxShadow = "0px 0px 7px grey";
  result.style.visibility = "visible";
}

function res() {
  let par = [
    document.getElementById("correct1").checked,
    document.getElementById("correct2").checked,
    document.getElementById("correct3").checked,
    document.getElementById("correct4").checked,
    document.getElementById("correct5").checked,
    document.getElementById("correct6").checked,
    document.getElementById("correct7").checked,
    document.getElementById("correct8").checked,
  ];

  if (par) {
    document.write(
      `<h1>Name : ${user} <br></h1> <h2>Quiz marks is ${score} out of 8</h2>`
    );
  }
}

let count = 25;
setInterval(() => {
  let cou = document.getElementById("counting");
  count--;
  cou.innerHTML = count + " Seconds left";

  if (count == 0) {
    document.write(
      `<h1>Name : ${user}</h1><br> <h2>Quiz marks is ${score} out of  8</h2>`
    );
  } else if (count == 20) {
    alert("Last 20s left");
  }
}, 1000);
