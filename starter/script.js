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
// const dogToHuman = (arr) => {
//   let humanAge = arr.map((age) => age <= 2 ? 2 * age : 16 + age * 4)
//   const average = humanAge.filter((val) => val >= 18)
//     .reduce((acc, cur, ind, arr) => (acc + cur / arr.length), 0)
//   return average
// }
// let newDogToHuman = dogToHuman(newCorrectedData)
// console.log(newDogToHuman);


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
// const gbpToNgn = 1.3
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const totalDepositNGN = movements.filter((value, ind) => value > 0)
//   .map((value, index, arr) => {
//     console.log(arr);
//     return value * gbpToNgn
//   }
//   )
//   .reduce((acc, cur) => acc + cur, 0)
// console.log(totalDepositNGN);

// Find Method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const firstWithdrawal = movements.find(mov => mov < 0)
// console.log(firstWithdrawal);
// const account = accounts.find(acc => acc.owner = "Jessica Davis")
// console.log(account);

// some and every Method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
// Equality
console.log(movements.includes(-130));
// Condition
const anyDeposits = movements.some(mov => mov > 5000)
console.log(anyDeposits);

console.log(movements.every(mov => mov > 0));


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



const calcDisplayBalance = function (account) {
  const balance = account.movements.reduce((acc, cur) => acc + cur, 0)
  labelBalance.textContent = `£ ${balance}`
}


const calcDisplaySummary = function (account) {
  const iN = account.movements.filter((val => val > 0)).reduce((acc, cur) => acc + cur, 0)
  const out = account.movements.filter((val => val < 0)).reduce((acc, cur) => acc + cur, 0)
  labelSumIn.textContent = `${iN}£`
  labelSumOut.textContent = `${Math.abs(out)}£`
  // Interest on each deposit and add the interest if it is greater than or equal to 1
  const interest = account.movements.filter((val) => val > 0)
    .map((val) => (val * account.interestRate) / 100)
    .filter((val) => val >= 1)
    .reduce((acc, cur) => acc + cur, 0)
  labelSumInterest.textContent = `${interest}£`


}

const accountBalance = function (accs) {
  accs.forEach(function (acc) {
    acc.balance = acc.movements
      .reduce((a, b) => a + b, 0)
  })

}
accountBalance(accounts)

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('')
  })
}
createUsernames(accounts)

const updateUI = function (acc) {
  // Display Transactions
  displayMovements(acc.movements)

  // Display Total Balance
  calcDisplayBalance(acc)

  // Display Interest, In and Outs
  calcDisplaySummary(acc)
}

// EventHandlers
let currentAccount
btnLogin.addEventListener("click", function (e) {
  e.preventDefault()
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)
  if (currentAccount === undefined) {
    alert("User does not exist please try again")
  }
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = ""
    inputLoginPin.blur()
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome Back, ${currentAccount.owner.split(" ")[0]}`
    containerApp.style.opacity = 100;
  }

  updateUI(currentAccount)
  // Implement an opacity display and error message for when the username and pin are not correct
})
// Transfer
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault()
  let amount = Number(inputTransferAmount.value)
  let receiverAccount = accounts.find(acc => acc.username === inputTransferTo.value)

  if (receiverAccount && amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAccount?.username !== currentAccount.username) {
    // Performing the Transfer
    currentAccount.movements.push(-amount)
    receiverAccount.movements.push(amount)


    // Update UI
    updateUI(currentAccount)
  }

  inputTransferAmount.value = inputTransferTo.value = ""
})

// Request Loan 
btnLoan.addEventListener('click', function (e) {
  e.preventDefault()
  const amount = Number(inputLoanAmount.value)

  if (amount > 0 &&
    currentAccount.movements
      .some((mov) => mov >= amount * 0.1)) {
    // Add the laon amount to the transaction list
    currentAccount.movements.push(amount)

    // update UI
    updateUI(currentAccount)
  }

  inputLoanAmount.value = ""
})
// Delete Account
btnClose.addEventListener('click', function (e) {
  e.preventDefault()

  if (inputCloseUsername.value === currentAccount.username
    && Number(inputClosePin.value) === currentAccount.pin) {
    const index = accounts.findIndex((acc => acc.username === currentAccount.username))
    console.log(index);

    // Delete account
    accounts.splice(index, 1)



    // Hide UI after deleting account
    containerApp.style.opacity = 0;


    labelWelcome.textContent = `Log in to get started`
  }
  inputCloseUsername.value = inputClosePin.value = ""

})


