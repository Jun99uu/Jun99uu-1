const calForm = document.querySelector("#cal-form");
const calInput = document.querySelector("#cal-input");
const addBtn = document.querySelector("#add-btn");
const minBtn = document.querySelector("#min-btn");
const mulBtn = document.querySelector("#mul-btn");
const divBtn = document.querySelector("#div-btn");
const eqBtn = document.querySelector("#eq-btn");
const preview = document.querySelector("#preview");

let process = "";

let value;
let sign;
let result;

function handleAdd(e) {
  if (calInput.value !== "") {
    const num = Number(calInput.value);
    if (!sign) {
      value = num;
      sign = "+";
    } else {
      if (sign === "+") {
        value += num;
      } else if (sign === "-") {
        value -= num;
      } else if (sign === "*") {
        value *= num;
      } else if (sign === "/") {
        value /= num;
      }
      sign = "+";
    }
    calInput.value = "";
    preview.textContent = value + sign;
  } else {
    alert("숫자 입력 안했자나욥👊");
  }
}

function handleMin(e) {
  if (calInput.value !== "") {
    const num = Number(calInput.value);
    if (!sign) {
      value = num;
      sign = "-";
    } else {
      if (sign === "+") {
        value += num;
      } else if (sign === "-") {
        value -= num;
      } else if (sign === "*") {
        value *= num;
      } else if (sign === "/") {
        value /= num;
      }
      sign = "-";
    }
    calInput.value = "";
    preview.textContent = value + sign;
  } else {
    alert("숫자 입력 안했자나욥👊");
  }
}

function handleMul(e) {
  if (calInput.value !== "") {
    const num = Number(calInput.value);
    if (!sign) {
      value = num;
      sign = "*";
    } else {
      if (sign === "+") {
        value += num;
      } else if (sign === "-") {
        value -= num;
      } else if (sign === "*") {
        value *= num;
      } else if (sign === "/") {
        value /= num;
      }
      sign = "*";
    }
    calInput.value = "";
    preview.textContent = value + sign;
  } else {
    alert("숫자 입력 안했자나욥👊");
  }
}

function handleDiv(e) {
  if (calInput.value !== "") {
    const num = Number(calInput.value);
    if (!sign) {
      value = num;
      sign = "/";
    } else {
      if (sign === "+") {
        value += num;
      } else if (sign === "-") {
        value -= num;
      } else if (sign === "*") {
        value *= num;
      } else if (sign === "/") {
        value /= num;
      }
      sign = "/";
    }
    calInput.value = "";
    preview.textContent = value + sign;
  } else {
    alert("숫자 입력 안했자나욥👊");
  }
}

function handleEq(e) {
  if (calInput.value !== "") {
    const num = Number(calInput.value);
    if (!sign && value) {
      calInput.value = "";
      preview.textContent = `정답은 ${value}입니다🐸`;
    } else if (sign) {
      if (sign === "+") {
        value += num;
      } else if (sign === "-") {
        value -= num;
      } else if (sign === "*") {
        value *= num;
      } else if (sign === "/") {
        value /= num;
      }
      calInput.value = "";
      preview.textContent = `정답은 ${value}입니다🐸`;
    } else if (!sign && !value && num) {
      calInput.value = "";
      preview.textContent = `정답은 ${num}입니다🐸`;
    } else {
      alert("숫자 입력 안했자나욥👊");
    }
  } else {
    alert("숫자 입력 안했자나욥👊");
  }
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
