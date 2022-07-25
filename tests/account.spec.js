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
      console.log = jest.fn();
      newAccount.printStatement();
      expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance');
    })
  });
  describe('Simple transactions', () => {
    it('increases balance by 100 if 100 is deposited', () => {
      const account1 = new Account();
      const date1 = new Date(2022, 6, 25)
      account1.deposit(100, date1);
      expect(account1.getBalance()).toBe(100);
    });
    it('prints bank statement with one transaction', () => {
      const account1 = new Account();
      const date1 = new Date(2022, 6, 25);
      account1.deposit(100, date1);
      console.log = jest.fn();
      account1.printStatement()
      expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance\n25/07/2022 || 100.00 || || 100.00');
    });
    it('reduces balance by 30 if 30 is withdrawn', () => {
      const account1 = new Account();
      const date1 = new Date(2022, 6, 25);
      const date2 = new Date(2022, 6, 26);
      account1.deposit(100, date1);
      account1.withdraw(30, date2);
      expect(account1.getBalance()).toBe(70);
    });
    it('prints bank statement with one transaction', () => {
      const account1 = new Account();
      const date1 = new Date(2022, 6, 25);
      const date2 = new Date(2022, 6, 26);
      account1.deposit(100, date1);
      account1.withdraw(30, date2);
      console.log = jest.fn();
      account1.printStatement()
      expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance\n26/07/2022 || || 30.00 || 70.00\n25/07/2022 || 100.00 || || 100.00');
    });
    it('does transactions with decimal points', () => {
      const account1 = new Account();
      const date1 = new Date(2022, 6, 25);
      const date2 = new Date(2022, 6, 26);
      account1.deposit(100.5, date1);
      account1.withdraw(30.2, date2);
      console.log = jest.fn();
      account1.printStatement()
      expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance\n26/07/2022 || || 30.20 || 70.30\n25/07/2022 || 100.50 || || 100.50');
    })
  });
  describe('Example from specification', () => {
    it('prints statements same as specification', () => {
      const accountSpec = new Account();
      const date1 = new Date(2023, 0, 10);
      const date2 = new Date(2023, 0, 13);
      const date3 = new Date(2023, 0, 14)
      accountSpec.deposit(1000, date1);
      accountSpec.deposit(2000, date2);
      accountSpec.withdraw(500, date3);
      console.log = jest.fn();
      accountSpec.printStatement()
      expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance\n14/01/2023 || || 500.00 || 2500.00\n13/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00');
    });
  });
})