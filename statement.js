class Statement {
  static print(transactions) {
    console.log(this.#generateStatementContent(transactions));
  }

  static #generateStatementContent(transactions) {
    const header = 'date || credit || debit || balance';
    let contents = [];
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
    return (transactions.length === 0) ?  header : header + '\n' + contents.reverse().join("\n");
  }
  static #numberToDisplay(number) {
    // return null if input is null, otherwise return number with 2 decimal places.
    return (number === null) ? null : number.toFixed(2);
  }
}

module.exports = Statement;
