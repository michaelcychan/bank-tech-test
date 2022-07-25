class Transaction {
  constructor (previousBalance, action, amount, date = Date.now()) {
    this.balance = previousBalance;
    this.calculateNewBalance(action, amount);
  }
  showBalance() {
    return this.balance;
  }

  calculateNewBalance(action, amount) {
    if (action === 'deposit') {
      this.balance += amount;
    } else if (action === 'withdraw') {
      this.balance -= amount;
    }
  }
}

module.exports = Transaction;