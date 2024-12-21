//Calculator
const addbutton = document.querySelector("#first1");
addbutton.addEventListener("click", () => {
  //Read data
  const first_num = document.getElementById("first");
  const number1 = Number(first_num.value);

  const sec_num = document.getElementById("second");
  const number2 = Number(sec_num.value);

  const result = number1 + number2;

  const re = document.getElementById("result");
  re.textContent = "Result : " + result;
});

const sub = document.querySelector("#second2");
sub.addEventListener("click", () => {
  const first_num = document.getElementById("first");
  const number1 = Number(first_num.value);

  const sec_num = document.getElementById("second");
  const number2 = Number(sec_num.value);

  const result = number1 - number2;

  const re = document.getElementById("result");
  re.textContent = "Result : " + result;
});

const mul = document.querySelector("#third");
mul.addEventListener("click", () => {
  const first_num = document.getElementById("first");
  const number1 = Number(first_num.value); //.value ka use karke hum direct access le sakte hai

  const sec_num = document.getElementById("second");
  const number2 = Number(sec_num.value);

  const result = number1 * number2;

  const re = document.getElementById("result");
  re.innerHTML = "Result : " + result;
});

const divide = document.querySelector("#forth");
divide.addEventListener("click", () => {
  const first_num = document.getElementById("first");
  const number1 = Number(first_num.value); //.value ka use karke hum direct access le sakte hai

  const sec_num = document.getElementById("second");
  const number2 = Number(sec_num.value);

  const result = number1 / number2;

  const re = document.getElementById("result");
  re.innerHTML = "Result : " + result;
});

const erase = document.querySelector("#erase");
erase.addEventListener("click", () => {
  const first_num = document.getElementById("first");
  const sec_num = document.getElementById("second");
  const re = document.getElementById("result");

  first_num.value = "";
  sec_num.value = "";
  re.innerHTML = "Result : " + "";
});
