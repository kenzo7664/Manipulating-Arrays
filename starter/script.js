'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANK APP

// Data
const account1 = {
  owner: 'Emmanuel Kenzo',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Steven Gerrard',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//Coding Challenge
const juliaData = [3, 5, 2, 12, 7]
const kateData = [4, 1, 15, 8, 3]

const juliaData1 = [...juliaData]
const juliaDataCorrected = juliaData1.slice(1, -2)
console.log(juliaDataCorrected);

const newCorrectedData = [...juliaDataCorrected, ...kateData]
console.log(newCorrectedData);
// Coding challenge 2
// function dogToHuman(arr) {
//   let humanAge = arr.map((age, index) => {
//     if (age <= 2) {
//       return 2 * age
//     } else if (age > 2) {
//       return 16 + (age * 4)
//     }
//   })
//   const dogGreaterThan = humanAge.filter((val) => val >= 18)
//   const average = dogGreaterThan.reduce((acc, cur, index, arr) => (acc + cur / arr.length), 0)
//   return average

// }
// let newDogToHuman = dogToHuman(newCorrectedData)
// console.log(newDogToHuman);


// Coding Challenge 3
const dogToHuman = (arr) => {
  let humanAge = arr.map((age) => age <= 2 ? 2 * age : 16 + age * 4)
  const average = humanAge.filter((val) => val >= 18)
    .reduce((acc, cur, ind, arr) => (acc + cur / arr.length), 0)
  return average
}
let newDogToHuman = dogToHuman(newCorrectedData)
console.log(newDogToHuman);


// function checkDogs(arr) {
//   arr.forEach((value, i) => {
//     if (value >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${value} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is a puppy`);
//     }
//   })

// }
// checkDogs(newCorrectedData)


// TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]


// Chaining Methods
const gbpToNgn = 1.3
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const totalDepositNGN = movements.filter((value, ind) => value > 0)
  .map((value, index, arr) => {
    console.log(arr);
    return value * gbpToNgn
  }
  )
  .reduce((acc, cur) => acc + cur, 0)
console.log(totalDepositNGN);


// Bank App
const displayMovements = function (movement) {
  containerMovements.innerHTML = '';
  movement.forEach(function (move, i) {

    const checker = move > 0 ? "deposit" : "withdrawal"
    const html = `
   <div class="movements__row">
          <div class="movements__type movements__type--${checker}">${i + 1} ${checker}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${move}£</div>
    </div>
   
   `;
    containerMovements.insertAdjacentHTML('afterbegin', html)
  })
}
displayMovements(account1.movements)


const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, cur) => acc + cur, 0)
  labelBalance.textContent = `£ ${balance}`
}
calcDisplayBalance(account1.movements)

const calcDisplaySummary = function (movement, rate) {
  const iN = movement.filter((val => val > 0)).reduce((acc, cur) => acc + cur, 0)
  const out = movement.filter((val => val < 0)).reduce((acc, cur) => acc + cur, 0)
  labelSumIn.textContent = `${iN}£`
  labelSumOut.textContent = `${Math.abs(out)}£`
  // Interest on each deposit and add the interest if it is greater than or equal to 1
  const interest = movements.filter((val) => val > 0)
    .map((val) => (val * rate) / 100)
    .filter((val) => val >= 1)
    .reduce((acc, cur) => acc + cur, 0)
  labelSumInterest.textContent = `${interest}£`


}
calcDisplaySummary(account1.movements, account1.interestRate)
