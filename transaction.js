class Transaction {
  constructor (previousBalance) {
    this.balance = previousBalance;
  }
  showBalance() {
    return this.balance;
  }
  deposit(money, date) {
    this.balance += money;
  }
  withdraw(money, date) {
    this.balance -= money;
  }
}

module.exports = Transaction;