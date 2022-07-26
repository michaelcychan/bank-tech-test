# Bank Tech Test

This is an Individual Technical Challenge at Week 10 in Makers Academy Bootcamp. This programme allows users to interact via a REPL (Node.js) to simulate bank transactions.

Link to all Individual technical challenges: https://github.com/makersacademy/course/tree/main/individual_challenges

## Tools
This programme runs on Node.js. 
The program is written in Javascript.
Jest is used for Unit Testing.
ESLint is used for Checking Syntax.

## Methodology
I adhered to the TDD (test-driven development) principles. New tests were written as a guide for development, then the program is developed to pass the tests. 

The program also follows the OO design (Object-oriented design), it consists of two classes, namely Account and Statement. Account class is responsible for the business logic and the Statement Class is responsible for the display logic.

The bank accounts are desigend to be instances of the Account Class, and the available actions of the accounts are functions of the Account Class. The Account Class holds an array of transactions. This transaction array will be passed to the Statement Class when it is called to print the bank statements.

Tests were added in complexity. As I wished to implement console.log in the printing of the bank statements, I needed to mock the console.log in the testing. Similarly, while the transactiond date should be recorded, days other than today has to be mocked in testing to simulate different days, or to allow the tests to pass after the tests were created.

Similarly, as it is needed to test with the transactions with different date, fake times were created inside the tests to simulate transactions at different dates.

As there are two classes, one unit test suite is built for each class, and an integration test was built to ensure the integration of the two classes.

### Note on the Class structure
There was an attempt to make each transaction one instance. However, the current design is that the transactions are kept as Javascript Objects in an array. Functions responsible for deposits and withdrawals (.deposit() and .withdraw()) are easy to use and understand, there is no need to create another class instance for each transaction. I attempted to refactor a Transaction class to separate each transaction from the current Account class, but that would expand the length of the codes tremendously. 

I think the Account class codebase currently is readable enough. 

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
You will be able to deposit and withdraw from the bank account. You can check the account balance or get the full bank statement.
```
> myNewAccount.deposit(1000.5);
undefined
> myNewAccount.withdraw(250);
undefined
> myNewAccount.getBalance();
750.5
```

The Statement Class is responsible to print statements of the bank accounts.
```
> const Statement = require('./statement');
> Statement.print(myNewAccount.getTransactions());
date || credit || debit || balance
25/07/2022 || || 250.00 || 750.50
25/07/2022 || 1000.50 || || 1000.50
```
## Screenshot
![Screenshot](./screenshots/BankTechTest-Screenshot-1.png "Screenshot")

## Testing:

To run ESLint and Jest test with coverage and a list of run tests:
```
npm run tets
```
![Jest Test Screenshot](./screenshots/BankTechTest-Screenshot-2.png "Jest Test")

Further Lint rules can be applied in the .eslintrc.json file.

## Further Issues
Currently there is no restriction on the amount of deposit or withdrawal. There is no instruction on how to handle if the transaction is or below 0. There is also no instruction on how to handle wrong data type. Error messages can be thrown if neccessary using .throw().
There are no instructions for how to handle cases such as withdrawing money more than the balance. Currently negative balance is allowed (as if overdraft). Further changes to the program is possible when there are more detailed specifications from client.
