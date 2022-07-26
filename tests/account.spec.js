const Account = require('../account');

describe('Account', () => {
  describe('initialisation', () => {
    it('initialises with 0 balance', () => {
      const account1 = new Account();
      expect(account1.getBalance()).toBe(0);
      expect(account1.getTransactions()).toStrictEqual([]);
    });
  });
  describe('Simple transactions', () => {
    it('increases balance by 100 if 100 is deposited', () => {
      const account1 = new Account();
      const date1 = new Date()
      account1.deposit(100);
      expect(account1.getBalance()).toBe(100);
      expect(account1.getTransactions()).toStrictEqual([{date: date1, in: 100, out: null, balance: 100}]);
    });
    it('reduces balance by 30 if 30 is withdrawn', () => {
      const account1 = new Account();
      const date1 = new Date();
      account1.deposit(100);
      account1.withdraw(30);
      expect(account1.getBalance()).toBe(70);
      expect(account1.getTransactions()).toStrictEqual([{date: date1, in: 100, out: null, balance: 100}, {date: date1, in: null, out: 30, balance: 70}]);
    });
  });
})