// let A = 0;

// while (A < 2) {
//   A++;
//   console.log("jeszcze nie");
// }

// console.log("już");

// let mil = 0;
// let sec = 0;

// while (mil < 99) {
//   mil++;
//   console.log("99");
// }

// let A = 2;
// while (A !== 2) {
//   console.log("jeszcze nie");
// }
// console.log("juz");

// let a = 0
// for (let a = 0; a < 99; a++) {
//   console.log("nie");
// }
// console.log("juz");

// for (let i = 0; i < 10; i++) {
//   console.log("milisec" + i);
// }
// for (let sec = 0; sec < 60; sec++) {
//   console.log("sec" + sec);
// }

// const fruits = ["null", "apple", "mago", "banana", "orange"];
// for (let i = 1; i < fruits.length; i++) {
//   console.log(`owoc ${i} to ${fruits[i]}`);
// }
// console.log("juz");
//
//
//
// =========================================
// ========= PĘTLA FOR I WHILE =============
// =========================================

// for (i = 0; i <= 15; i++) {
//   console.log(`pętla ` + i);
// }

// let A = 0;
// while (A < 15) {
//   A++;
//   console.log("pętla " + A);
// }
// console.log("juz");

// for (i = 100; i >= 50; i--) {
//   console.log(i);
// }
//

// =========================================
// == Ćwiczenie wyświetl liczby pomiędzy ===
// =========================================
// let A = prompt("podaj liczbę A");
// let B = prompt("podaj liczbę B");

// console.log(A);
// console.log(B);

// if (A < B) {
//   for (i = A; i <= B; i++) {
//     console.log(`liczba` + i);
//   }
// } else if (A > B) {
//   for (i = B; i <= A; i++) {
//     console.log(`liczba` + i);
//   }
// }

// =========================================
// Ćwiczenie!! wyświetl nazwy filmów z tabeli
// =========================================
//
// let Movies = ["seven", "top gun", "hobbit", "avatar", "terminator"];

// for (i = 0; i < Movies.length; i++) {
//   console.log(Movies[i]);
// }
//
//
// =========================================
// Ćwiczenie!! znajdż najmn. i największ.
// =========================================
// let Arr = [1, 4, 76, 45, 34, 32, 88, 6, 2];
// let min = Arr[0];
// let max = Arr[0];

// for (i = 0; i < Arr.length; i++) {
//   if (Arr[i] < min) {
//     min = Arr[i];
//   }
//   if (Arr[i] > max) {
//     max = Arr[i];
//   }
// }

// console.log(`najmniejsza to: ${min}`);
// console.log(`największa to: ${max}`);
//
//
//
// =========================================
// =========== OBIEKTY =====================
// =========================================

// const Kazik = {
//   name: "Kazik",
//   lastName: "Targwski",
//   age: 38,
//   nationality: "Polish",
//   birthDate: "01.03.1984",
//   location: {
//     city: "Opole",
//     country: "Poland",
//   },
// };
// console.log(Kazik.name, Kazik.age, Kazik.nationality, Kazik.location.city);

// =========================================
// =========== TABLICA OBIEKTOW ============
// =========================================
// let table = [
//   { name: "kazik", age: 38 },
//   { name: "marcin", age: 32 },
//   { name: "michał", age: 35 },
// ];
// console.log(table[1].name);
//
// =========================================
// ======== PĘTLE LOSOWANIE ================
// =========================================

// let rand = Math.round(Math.random() * 101);
// console.log(rand);

// let guess = prompt(`Zgadnij liczbę od 0 do 100`);

// while (guess < rand) {
//   guess = prompt(`podaj większą liczbę`);
// }
// while (guess > rand) {
//   guess = prompt(`podaj mniejszą liczbę`);
// }
// while ((guess = rand)) {
//   alert(`brawo!`);
//   break;
// }

// =========================================
// ======== ŚREDNIA ARYTMETYCZNA ===========
// =========================================
// let A = prompt(`Wyliczmy średnią arytmetyczną. Ile liczb chciałbyś podać?`);

// let array = [];

// for (let i = 0; i < A; i++) {
//   let number = +prompt(`podaj liczbę`);
//   array.push(number);
// }

// let sum = 0;
// for (const value of array) {
//   sum += value;
// }
// let summary = sum / array.length;
// alert(`Średnia arytmetyczna tych liczb to ${summary}`);

//
// =========================================
// ======== DWIE TABLICE ===================
// =========================================

// let list = [23, "string", 43, 24, null, "string2"];
// let numbers = [];

// for (i = 0; i < list.length; i++) {
//   if (typeof list[i] === "number") {
//     numbers.push(list[i]);
//   }
// }
// console.log(list, numbers);

// albo:

// for (i = 0; i < list.length; i++) {
//   if (typeof list[i] !== "number") continue;
//   numbers.push(list[i]);
// }
// console.log(list, numbers);

// =========================================
// ======== FUNKCJA - ROZNICA ==============
// =========================================

// let A = prompt("Znajdźmy różnicę dwuch liczb. podaj pierwszą liczbę");
// let B = prompt("Podaj drugą liczbę");
// function roznica() {
//   if (A >= B) {
//     let X = A - B;
//     return X;
//   } else {
//     let Y = B - A;
//     return Y;
//   }
// }
// console.log(roznica(A, B));

// alert(`Różnica pomiędzy tymi liczbami wynosi ${roznica(A, B)}`);

// =========================================
// ======== PROSTOKąT ======================
// =========================================
// let x = prompt(`Obliczmy pole prostokąta: Podaj długość boku a.`);
// let y = prompt("Podaj długość boku b.");

// const prostokat = {
//   bok1: x,
//   bok2: y,
// };

// function pole(prostokat) {
//   let p = prostokat.bok1 * prostokat.bok2;
//   return p;
// }

// alert(`Pole Twojego prostokąta wynosi ${pole(prostokat)}.`);
//
//
// =========================================
// ======== AddOne array ===================
// =========================================

// array = [3, 5, 7, 9, 12, 16, 37, 48, 69];

// function addOne() {
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i] + 1;
//     console.log(element);
//   }
// }

// console.log(addOne());

// =========================================
// ======== TIMEOUT INTERVAL ===============
// =========================================
//
// let pyk1 = 0;
// function go() {
//   pyk1++;
//   console.log(pyk);
// }

// setInterval(go, 500);

// let stop;

// function end() {
//   clearInterval(go());
// }
// setTimeout(end, 4000);
//
////////// ROZWIąZANIE ///////////
//
// let pyk = 0;
// const kolejna = setInterval(() => {
//   console.log(pyk++);
// }, 500);

// setTimeout(() => clearInterval(kolejna), 5000);

//coś wygooglowałem ale nie wiem dlaczego tak to ma wyglądać, nie umiałem odliczania zatrzymać w function declaration a te strzałkowe jescze mi nie leżą :/

// =========================================
// ======== KALKULATOR =====================
// =========================================
const $plusBtn = document.getElementById("plus");
const $minusBtn = document.getElementById("minus");
const $dzielBtn = document.getElementById("dziel");
const $mnozBtn = document.getElementById("mnoz");
const $num1 = document.getElementById("numer1");
const $num2 = document.getElementById("numer2");

function dodawanie() {
  count = parseInt($num1.value) + parseInt($num2.value);
  const result = document.getElementById("wynik");
  result.value = count;
}

odejmowanie = function () {
  count = $num1.value - $num2.value;
  result = document.getElementById("wynik");
  result.value = count;
};

mnozenie = function () {
  count = $num1.value * $num2.value;
  result = document.getElementById("wynik");
  result.value = count;
};
dzielenie = function () {
  count = $num1.value / $num2.value;
  result = document.getElementById("wynik");
  result.value = count;
};

$plusBtn.addEventListener("click", dodawanie);
$minusBtn.addEventListener("click", odejmowanie);
$mnozBtn.addEventListener("click", mnozenie);
$dzielBtn.addEventListener("click", dzielenie);
