const Account = require('../account');
const Statement = require('../statement');

describe('Integration Test', () => {
  beforeEach(() => {
    console.log = jest.fn();
  });
  it('prints bank statement with 0 transaction', () => {
    const account = new Account();
    Statement.print(account.getTransactions());
    expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance');
  });
  it('prints bank statement with a single transaction', () => {
    const account = new Account();
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date(2022, 6, 25));
    account.deposit(100);
    Statement.print(account.getTransactions());
    expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance\n25/07/2022 || 100.00 || || 100.00');
  });
  it('prints bank statement with two transactions and decimal places', () => {
    const account = new Account();
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date(2022, 6, 25));
    account.deposit(100.5);
    jest.setSystemTime(new Date(2022, 6, 26));
    account.withdraw(30.2);
    Statement.print(account.getTransactions());
    expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance\n26/07/2022 || || 30.20 || 70.30\n25/07/2022 || 100.50 || || 100.50');
  });
  it('prints the bank statement of the specification case', () => {
    const accountSpec = new Account();
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date(2023, 0, 10));
    accountSpec.deposit(1000);
    jest.setSystemTime(new Date(2023, 0, 13));
    accountSpec.deposit(2000);
    jest.setSystemTime(new Date(2023, 0, 14));
    accountSpec.withdraw(500);
    Statement.print(accountSpec.getTransactions());
    expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance\n14/01/2023 || || 500.00 || 2500.00\n13/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00');
  });
})