const Transaction = require('../transaction');

describe('Transaction', () => {
  it('initialises with balance equal to previous balance (100)', () => {
    const transaction = new Transaction(100);
    expect(transaction.showBalance()).toStrictEqual(100);
  });
  it('initialises with balance equal to previous balance (200)', () => {
    const transaction = new Transaction(200);
    expect(transaction.showBalance()).toStrictEqual(200);
  });
})