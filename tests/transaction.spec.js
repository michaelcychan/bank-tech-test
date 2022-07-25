const Transaction = require('../transaction');

describe('Transaction', () => {
  describe('Initialisation', () => {
    it('initialises with balance equal to previous balance (100)', () => {
      const transaction = new Transaction(100);
      expect(transaction.showBalance()).toStrictEqual(100);
    });
    it('initialises with balance equal to previous balance (200)', () => {
      const transaction = new Transaction(200);
      expect(transaction.showBalance()).toStrictEqual(200);
    });
  });
  describe('Simple Transaction', () => {
    it('deposits money and changes the balance', () => {
      const transaction = new Transaction(200, 'deposit', 100, '2022-05-06');

      expect(transaction.showBalance()).toStrictEqual(300);
    });
    it('withdraws money and changes the balance', () => {
      const transaction = new Transaction(200, 'withdraw', 70, '2022-07-02');
      expect(transaction.showBalance()).toStrictEqual(130);
    });
  });
})