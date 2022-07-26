class Statement {
  static print(transactions) {
    console.log(this.#generateStatementContent(transactions));
  }

  static #generateStatementContent(transactions) {
    const header = 'date || credit || debit || balance';
    let contents = [];
    transactions = this.#sortTransactions(transactions);
    transactions.forEach((transaction) => {
      contents.push(
        [
          transaction.date.toLocaleDateString('en-GB'),
          this.#numberToDisplay(transaction.in),
          this.#numberToDisplay(transaction.out),
          this.#numberToDisplay(transaction.balance)
        ].join(" || ").replace(/\s+/g, " ") // removing double whitespace after joining
      );
    });
    return (transactions.length === 0) ?  header : header + '\n' + contents.join("\n");
  }
  static #numberToDisplay(number) {
    // return null if input is null, otherwise return number with 2 decimal places.
    return (number === null) ? null : number.toFixed(2);
  }

  static #sortTransactions(transactions) {
    transactions.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      }
      if (a.date > b.date) {
        return -1;
      }
      return 0;
    });
    return transactions;
  }
}

module.exports = Statement;
