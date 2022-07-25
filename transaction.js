class Transaction {
  constructor (previousBalance) {
    this.balance = previousBalance;
  }
  showBalance() {
    return this.balance;
  }
}

module.exports = Transaction;