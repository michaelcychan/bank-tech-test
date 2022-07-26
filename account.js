class Account {
  constructor() {
    this.balance = 0;
    this.transactions = []; // array to store transactions data
  }
  deposit(money) {
    const date = new Date();
    this.balance += money;
    this.transactions.push({date: date, in: money, out: null, balance: this.balance});
  }
  withdraw(money) {
    const date = new Date();
    this.balance -= money;
    this.transactions.push({date: date, in: null, out: money, balance: this.balance});
  }
  getBalance() {
    return this.balance;
  }
  getTransactions() {
    return this.transactions;
  }
}
module.exports = Account;