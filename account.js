class Account {
  constructor() {
    this.balance = 0
  };
  deposit(money) {
    this.balance += money;
  };
  getBalance() {
    return this.balance;
  };
}

module.exports = Account;