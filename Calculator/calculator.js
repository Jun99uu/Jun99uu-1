const calForm = document.querySelector("#cal-form");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const addBtn = document.querySelector("#add-btn");
const minBtn = document.querySelector("#min-btn");
const mulBtn = document.querySelector("#mul-btn");
const divBtn = document.querySelector("#div-btn");
const eqBtn = document.querySelector("#eq-btn");
const preview = document.querySelector("#preview");
const cancleBtn = document.querySelector("#cancle-btn");

let process = "";

let value = ""; //입력된 값
let result = 0; //결과 값
let sign = ""; //기호
let inputNum = ""; //입력 숫자

function handleOne(e) {
  if (inputNum === "") {
    inputNum = "1";
  } else {
    inputNum += "1";
  }
  value = Number(inputNum);
  preview.textContent = value;
}

function handleTwo(e) {
  if (inputNum === "") {
    inputNum = "2";
  } else {
    inputNum += "2";
  }
  value = Number(inputNum);
  preview.textContent = value;
}

function handleThree(e) {
  if (inputNum === "") {
    inputNum = "3";
  } else {
    inputNum += "3";
  }
  value = Number(inputNum);
  preview.textContent = value;
}

function handleFour(e) {
  if (inputNum === "") {
    inputNum = "4";
  } else {
    inputNum += "4";
  }
  value = Number(inputNum);
  preview.textContent = value;
}

function handleFive(e) {
  if (inputNum === "") {
    inputNum = "5";
  } else {
    inputNum += "5";
  }
  value = Number(inputNum);
  preview.textContent = value;
}

function handleSix(e) {
  if (inputNum === "") {
    inputNum = "6";
  } else {
    inputNum += "6";
  }
  value = Number(inputNum);
  preview.textContent = value;
}

function handleSeven(e) {
  if (inputNum === "") {
    inputNum = "7";
  } else {
    inputNum += "7";
  }
  value = Number(inputNum);
  preview.textContent = value;
}

function handleEight(e) {
  if (inputNum === "") {
    inputNum = "8";
  } else {
    inputNum += "8";
  }
  value = Number(inputNum);
  preview.textContent = value;
}

function handleNine(e) {
  if (inputNum === "") {
    inputNum = "9";
  } else {
    inputNum += "9";
  }
  value = Number(inputNum);
  preview.textContent = value;
}

function handleZero(e) {
  if (inputNum === "") {
    inputNum = "0";
  } else {
    inputNum += "0";
  }
  value = Number(inputNum);
  preview.textContent = value;
}

function handleAdd() {
  if (value !== "") {
    //숫자가 입력 되었을 때
    if (sign === "") {
      //이전에 입력한 기호가 없을 때
      result = value; //계산값에 이전 입력값 넣어줌
      sign = "+"; //기호에 더하기 넣어줌
      inputNum = "";
      value = "";
    } else {
      //이전에 입력한 기호가 있을 때
      if (sign === "+") {
        result = result + value;
      } else if (sign === "-") {
        result -= value;
      } else if (sign === "*") {
        result *= value;
      } else if (sign === "/") {
        result /= value;
      }
      sign = "+";
      inputNum = "";
      value = "";
    }
    preview.textContent = result;
  } else {
    alert("숫자 입력 안했자나욥👊");
  }
}

function handleMin(e) {
  if (value !== "") {
    //숫자가 입력 되었을 때
    if (sign === "") {
      //이전에 입력한 기호가 없을 때
      result = value; //계산값에 이전 입력값 넣어줌
      sign = "-"; //기호에 더하기 넣어줌
      inputNum = "";
      value = "";
    } else {
      //이전에 입력한 기호가 있을 때
      if (sign === "+") {
        result += value;
      } else if (sign === "-") {
        result -= value;
      } else if (sign === "*") {
        result *= value;
      } else if (sign === "/") {
        result /= value;
      }
      sign = "-";
      inputNum = "";
      value = "";
    }
    preview.textContent = result;
  } else {
    alert("숫자 입력 안했자나욥👊");
  }
}

function handleMul(e) {
  if (value !== "") {
    //숫자가 입력 되었을 때
    if (sign === "") {
      //이전에 입력한 기호가 없을 때
      result = value; //계산값에 이전 입력값 넣어줌
      sign = "*"; //기호에 더하기 넣어줌
      inputNum = "";
    } else {
      //이전에 입력한 기호가 있을 때
      if (sign === "+") {
        result += value;
      } else if (sign === "-") {
        result -= value;
      } else if (sign === "*") {
        result *= value;
      } else if (sign === "/") {
        result /= value;
      }
      sign = "*";
      inputNum = "";
      value = "";
    }
    preview.textContent = result;
  } else {
    alert("숫자 입력 안했자나욥👊");
  }
}

function handleDiv(e) {
  if (value !== "") {
    //숫자가 입력 되었을 때
    if (sign === "") {
      //이전에 입력한 기호가 없을 때
      result = value; //계산값에 이전 입력값 넣어줌
      sign = "/"; //기호에 더하기 넣어줌
      inputNum = "";
    } else {
      //이전에 입력한 기호가 있을 때
      if (sign === "+") {
        result += value;
      } else if (sign === "-") {
        result -= value;
      } else if (sign === "*") {
        result *= value;
      } else if (sign === "/") {
        result /= value;
      }
      sign = "/";
      inputNum = "";
      value = "";
    }
    preview.textContent = result;
  } else {
    alert("숫자 입력 안했자나욥👊");
  }
}

function handleEq(e) {
  if (value !== "") {
    if (sign === "+") {
      result += value;
    } else if (sign === "-") {
      result -= value;
    } else if (sign === "*") {
      result *= value;
    } else if (sign === "/") {
      result /= value;
    }
  }
  sign = "";
  inputNum = "";
  value = result;
  preview.textContent = result + "🐸";
}

function handleCancle() {
  value = "";
  result = 0;
  inputNum = "";
  preview.textContent = "0";
}

function handleToDoSubmit(event) {
  event.preventDefault();
}

calForm.addEventListener("submit", handleToDoSubmit);
addBtn.addEventListener("click", handleAdd);
minBtn.addEventListener("click", handleMin);
mulBtn.addEventListener("click", handleMul);
divBtn.addEventListener("click", handleDiv);
eqBtn.addEventListener("click", handleEq);
one.addEventListener("click", handleOne);
two.addEventListener("click", handleTwo);
three.addEventListener("click", handleThree);
four.addEventListener("click", handleFour);
five.addEventListener("click", handleFive);
six.addEventListener("click", handleSix);
seven.addEventListener("click", handleSeven);
eight.addEventListener("click", handleEight);
nine.addEventListener("click", handleNine);
zero.addEventListener("click", handleZero);
cancleBtn.addEventListener("click", handleCancle);
