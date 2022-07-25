class Account {
  constructor() {
    this.balance = 0;
    this.transactions = []; // array to store transactions data
  }
  deposit(money, date = new Date()) { // Default value is 'today'
    this.balance += money;
    this.transactions.push({date: date, in: money, out: null, balance: this.balance});
  }
  withdraw(money, date = new Date()) { // Default value is 'today'
    this.balance -= money;
    this.transactions.push({date: date, in: null, out: money, balance: this.balance});
  }
  getBalance() {
    return this.balance;
  }
  printStatement() {
    console.log(this.#generateFullStatement());
  }

  // internal functions
  #numberToDisplay(number) {
    // return null if input is null, otherwise return number with 2 decimal places.
    return (number === null) ? null : number.toFixed(2);
  }
  #generateStatementContent() {
    let contents = [];
    this.transactions.forEach((transaction) => {
      contents.push(
        [
          transaction.date.toLocaleDateString('en-GB'),
          this.#numberToDisplay(transaction.in),
          this.#numberToDisplay(transaction.out),
          this.#numberToDisplay(transaction.balance)
        ].join(" || ").replace(/\s+/g, " ") // removing double whitespace after joining
      );
    });
    return "\n" + contents.reverse().join("\n");
  }
  #generateFullStatement() {
    const header = "date || credit || debit || balance";
    const contents = this.#generateStatementContent();
    return (this.transactions.length === 0) ?  header : header + contents;
  }
}
module.exports = Account;