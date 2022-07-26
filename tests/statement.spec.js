const Statement = require('../statement');

describe('Statement', () => {
  it('prints empty bank statement', () => {
    const accountDouble = {getTransactions: () => []}
    console.log = jest.fn();
    Statement.print(accountDouble.getTransactions());
    expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance');
  });
  it('prints bank statement with one transaction', () => {
    const date1 = new Date(2022, 6, 25);
    const accountDouble = {
      getTransactions: () => [
        {date: date1, in: 100, out: null, balance: 100  }
      ]
    }
    console.log = jest.fn();
    Statement.print(accountDouble.getTransactions());
    expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance\n25/07/2022 || 100.00 || || 100.00');
  });
  it('prints bank statement with two transaction', () => {
    const date1 = new Date(2022, 6, 25);
    const date2 = new Date(2022, 6, 26);
    const accountDouble = {
      getTransactions: () => [
        {date: date1, in: 100.5, out: null, balance: 100.5},
        {date: date2, in: null, out: 30.2, balance: 70.3}
      ]
    }
    console.log = jest.fn();
    Statement.print(accountDouble.getTransactions());
    expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance\n26/07/2022 || || 30.20 || 70.30\n25/07/2022 || 100.50 || || 100.50');
  });
})