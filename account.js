class Account {
  constructor() {
    this.balance = 0
    this.transactions = []; // array to store transactions data
  }
  deposit(money, date) {
    this.balance += money;
    this.transactions.push({date: this.stringToDate(date), in: money, out: null, balance: this.balance});
  }
  withdraw(money, date) {
    this.balance -= money;
    this.transactions.push({date: this.stringToDate(date), in: null, out: money, balance: this.balance});
  }
  getBalance() {
    return this.balance;
  }
  printStatement() {
    const header = "date || credit || debit || balance";
    const contents = this.generateStatementContent();
    return (this.transactions.length === 0) ? header : header + contents;
  }

  // internal functions
  stringToDate(dateString) {
    // breaking down the date string into year, month (00 being Jan), and day.
    // Returning the date value
    return new Date(dateString.slice(0,4), dateString.slice(5,7) - 1, dateString.slice(8,10));
  }

  numberToDisplay(number) {
    // return null if input is null, otherwise return number with 2 decimal places.
    return (number === null) ? null : number.toFixed(2);
  }

  generateStatementContent() {
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
    return "\n" + contents.reverse().join('\n');
  }
}

module.exports = Account;