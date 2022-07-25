class Account {
  constructor() {
    this.balance = 0
    this.transactions = [];
  };
  deposit(money, date) {
    this.balance += money;
    this.transactions.push({date: this.stringToDate(date), in: money, out: null, balance: this.balance});
  };
  withdraw(money, date) {
    this.balance -= money;
    this.transactions.push({date: this.stringToDate(date), in: null, out: money, balance: this.balance});
  }
  getBalance() {
    return this.balance;
  };
  printStatement() {
    const header = "date || credit || debit || balance";
    let contents = [];
    this.transactions.forEach((transaction) => {
      contents.push(
        [
          transaction.date.toLocaleDateString('en-GB'),
          this.numberToDisplay(transaction.in),
          this.numberToDisplay(transaction.out),
          this.numberToDisplay(transaction.balance)
        ].join(" || ").replace(/\s+/g, " ") // removing double whitespace after joining
      );
    });
    contents.reverse(); // latest transaction first
    if (contents.length === 0) {
      return header;
    } else {
      return header + "\n" + contents.join('\n');
    } 
  };

  // internal functions
  stringToDate(dateString) {
    // breaking down the date into year, month, and day. returning the date value
    return new Date(dateString.slice(0,4), dateString.slice(5,7) - 1, dateString.slice(8,10));
  };

  numberToDisplay(number) {
    return (number === null) ? null : number.toFixed(2);
  }

}

module.exports = Account;