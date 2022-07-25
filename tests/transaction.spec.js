const Transaction = require('../transaction');

describe('Transaction', () => {
  it('initialises with balance equal to previous balance (100)', () => {
    const transaction = new Transaction(100);
    expect(transaction.balance()).toStrictEqual(100);
  });
})