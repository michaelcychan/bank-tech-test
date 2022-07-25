const Account = require('../account');

describe('Account', () => {
  describe('initialisation', () => {
    it('initialises with 0 balance', () => {
      const account1 = new Account();
      expect(account1.getBalance()).toBe(0);
    });
    it('prints bank statement', () => {
      const newAccount = new Account ();
      expect(newAccount.getBalance()).toBe(0);
      expect(newAccount.printStatement()).toEqual('date || credit || debit || balance');
    })
  });
  describe('Simple transactions', () => {
    it('increases balance by 100 if 100 is deposited', () => {
      const account1 = new Account();
      account1.deposit(100, '2022-07-25');
      expect(account1.getBalance()).toBe(100);
    });
    it('prints bank statement with one transaction', () => {
      const account1 = new Account();
      account1.deposit(100, '2022-07-25');
      expect(account1.printStatement()).toStrictEqual('date || credit || debit || balance\n25/07/2022 || 100.00 || || 100.00');
    })
  })
})