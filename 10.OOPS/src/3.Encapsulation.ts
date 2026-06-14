/**
 * 
 * Encapsulation is the process of wrapping the code and data together into a single unit.
 * Bundle and protect: hide the internal details so ooutside  code cant corrupt
 */

// Access Modifiers: default, public, private, protected
// methods: function inside a class

class BankAccount {
    public owner: string; // 
    private balance: number = 0; // we nned to protect this balance property from outside influence 
    private pin: number; // we need to protect this pin property from outside influence 


    constructor(owner: string, pin: number) {
        this.owner = owner;
        this.pin = pin;
    }

    deposit(amount: number) {
        if(amount < 0) {
            console.log("Invalid amount");
            return;
        }
        this.balance += amount;
    }

    withdraw(amount: number, pin: number) { 
        if(this.pin !== pin) {
            console.log("Invalid pin");
            return;
        }
        this.balance -= amount;
    }


    // getters 
    get availableBalance() {
        return this.balance;
    }

    // setters 
    set pinChange(newPin: number) {
        this.pin = newPin;
    }

}

const utkarshAccount = new BankAccount("Utkarsh", 1234);
console.log(utkarshAccount.owner);
utkarshAccount.owner = "Utkarsh Singh";

console.log(utkarshAccount.owner);


// change in balance // this is not allowed
// utkarshAccount.balance = 10000;


utkarshAccount.deposit(1000);
utkarshAccount.withdraw(500, 1234);


// console.log(utkarshAccount.balance); // this will not work 
console.log(utkarshAccount.availableBalance, 'available balance');
utkarshAccount.pinChange = 1235;




// --------------------- getters and setters ------------------------

