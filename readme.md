# Bank Tech Test

This is an Individual Technical Challenge at Week 10 in Makers Academy Bootcamp. This programme allows users to interact via a REPL (Node.js) to simulate bank transactions.

Link to all Individual technical challenges: https://github.com/makersacademy/course/tree/main/individual_challenges

## Tools
This programme runs on Node.js. 
The program is written in Javascript.
Jest is used for Unit Testing.
ESLint is used for Checking Syntax.

## Installation
To run locally, type the following commands in command line:
```
git clone https://github.com/michaelcychan/bank-tech-test.git
npm install
```

## Running the program
In command line, run Node.js:
```
node
```

Once you are inside Node.js, import the Account Class and create a new Account Class instance:
```
> const Account = require('./account');
> const myNewAccount = new Account();
```

## Available commands
You will be able to deposit and withdraw from the bank account. When you deposit money, it is necessary to enter the date in YYYY-MM-DD format.
You can check the account balance or get the full bank statement.
```
> myNewAccount.deposit(1000, '2022-05-03');
undefined
> myNewAccount.withdraw(250, '2022-07-02');
undefined
> myNewAccount.getBalance();
750
> myNewAccount.printStatement();
'date || credit || debit || balance\n' +
  '02/07/2022 || || 250.00 || 750.00\n' +
  '03/05/2022 || 1000.00 || || 1000.00'
```
## Screenshot
![Screenshot](./screenshots/BankTechTest-Screenshot-1.png "Screenshot")

## Testing:
To run the unit test with coverage:
```
jest --coverage
```
![Jest Test Screenshot](./screenshots/BankTechTest-Screenshot-2.png "Jest Test")