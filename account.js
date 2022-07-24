class Account {
  constructor(dateOpeningAccount) {
    this.balance = 0
  };
  deposit(money, date) {
    this.balance += money;
  };
  getBalance() {
    return this.balance;
  };
  printStatement() {
    let output = "date || credit || debit || balance \n 24/07/2022 || || || 0.00"
    return output;
  }
}

module.exports = Account;