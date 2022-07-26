const Statement = require('../statement');

describe('Statement', () => {
  beforeEach(() => {
    console.log = jest.fn();
  })
  it('prints empty bank statement', () => {
    const accountDouble = {getTransactions: () => []}
    Statement.print(accountDouble.getTransactions());
    expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance');
  });
  it('prints bank statement with one transaction', () => {
    const date20220725 = new Date(2022, 6, 25);
    const accountDouble = {
      getTransactions: () => [
        {date: date20220725, in: 100, out: null, balance: 100  }
      ]
    }
    Statement.print(accountDouble.getTransactions());
    expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance\n25/07/2022 || 100.00 || || 100.00');
  });
  it('prints bank statement with two transactions and decimal places', () => {
    const date20220725 = new Date(2022, 6, 25);
    const date20220726 = new Date(2022, 6, 26);
    const accountDouble = {
      getTransactions: () => [
        {date: date20220725, in: 100.5, out: null, balance: 100.5},
        {date: date20220726, in: null, out: 30.2, balance: 70.3}
      ]
    }
    Statement.print(accountDouble.getTransactions());
    expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance\n26/07/2022 || || 30.20 || 70.30\n25/07/2022 || 100.50 || || 100.50');
  });
  it('prints bank statement with three transactions', () => {
    const date1 = new Date(2023, 0, 10);
    const date2 = new Date(2023, 0, 13);
    const date3 = new Date(2023, 0, 14)
    const accountDouble = {
      getTransactions: () => [
        {date: date1, in: 1000, out: null, balance: 1000},
        {date: date2, in: 2000, out: null, balance: 3000},
        {date: date3, in: null, out: 500, balance: 2500}
      ]
    }
    Statement.print(accountDouble.getTransactions());
    expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance\n14/01/2023 || || 500.00 || 2500.00\n13/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00');
  });
  it('prints bank statements in chronological order even when the input were not', () => {
    const date1 = new Date(2023, 0, 10);
    const date2 = new Date(2023, 0, 13);
    const date3 = new Date(2023, 0, 14)
    const accountDouble = {
      getTransactions: () => [
        {date: date3, in: null, out: 500, balance: 2500},
        {date: date2, in: 2000, out: null, balance: 3000},
        {date: date1, in: 1000, out: null, balance: 1000}
      ]
    }
    Statement.print(accountDouble.getTransactions());
    expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance\n14/01/2023 || || 500.00 || 2500.00\n13/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00');
  })
})