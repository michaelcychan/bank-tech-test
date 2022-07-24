const Account = require('../account');

describe('Account', () => {
  describe('initialisation', () => {
    it('initialises with 0 balance', () => {
      const account1 = new Account();
      expect(account1.getBalance()).toBe(0);
    });
  });
  describe('Simple transactions', () => {
    it('increases balance by 100 if 100 is deposited', () => {
      const account1 = new Account();
      account1.deposit(100);
      expect(account1.getBalance()).toBe(100);
    })
  })
})