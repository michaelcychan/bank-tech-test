const Statement = require('../statement');

describe('Statement', () => {
  it('prints empty bank statement', () => {
    const accountDouble = {getTransactions: () => []}
    console.log = jest.fn();
    Statement.print(accountDouble.getTransactions());
    expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance');
  })
})