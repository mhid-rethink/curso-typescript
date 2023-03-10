// Desafio
type BankAccount = {balance: number, deposit: (value: number) => void}
type AccountHolder = {name: string, bankAccount: BankAccount, contacts: string[]}

let bankAccount: BankAccount = {
    balance: 3456,
    deposit(value: number): void {
        this.balance += value
    }
}
 
let accountHolder: AccountHolder = {
    name: 'Ana Silva',
    bankAccount: bankAccount,
    contacts: ['34567890', '98765432']
}
 
accountHolder.bankAccount.deposit(3000)
console.log(accountHolder)