const Account = require('../account');

describe('Account', () => {
  describe('initialisation', () => {
    it('initialises with 0 balance', () => {
      const account1 = new Account('2022-07-24');
      expect(account1.getBalance()).toBe(0);
    });
    it('prints bank statement', () => {
      const newAccount = new Account ('2022-07-24');
      expect(newAccount.getBalance()).toBe(0);
      expect(newAccount.printStatement()).toStrictEqual('date || credit || debit || balance \n 24/07/2022 || || || 0.00');
    })
  });
  describe('Simple transactions', () => {
    it('increases balance by 100 if 100 is deposited', () => {
      const account1 = new Account('2022-07-24');
      account1.deposit(100);
      expect(account1.getBalance()).toBe(100);
    })
  })
})