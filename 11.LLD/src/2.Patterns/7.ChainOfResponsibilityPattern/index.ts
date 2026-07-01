/**
 * Chain of responsibility pattern
 * 
 * 
 */

// bad example:


// function approve(amount: number) {
//     if(amount <= 1000) {
//         console.log("Laeds Approved");
//     } else if(amount <= 10000) {
//         console.log("Manager Approved");
//     } else {
//         console.log("Not Approved");
//     }
// }
// here if i want to add a new approver, or delete a approver i have to modify the approve function (not following O (open closed solid principle) principle)



interface IHandler {
    setNext(next: IHandler): IHandler;
    handle(amount: number): void;
}



abstract class Approver implements IHandler {
    private next: IHandler | null = null;

    setNext(next: IHandler): IHandler {
        this.next = next;
        return next;
    }

    handle(amount: number): void {
        if(this.canApprove(amount)) {
            return;
        }
        if(this.next) {
            this.next.handle(amount);
        }
    }
    
    abstract canApprove(amount: number): boolean;

}

class LaedsApprover extends Approver {
    canApprove(amount: number): boolean {
        if(amount <= 1000) {
            console.log("Laeds Approved");
            return true;
        }
        return false;
    }
}

class ManagerApprover extends Approver {
    canApprove(amount: number): boolean {
        if(amount <= 10000) {
            console.log("Manager Approved");
            return true;
        }
        return false;
    }
}

class CEOApprover extends Approver {
    canApprove(amount: number): boolean {
        if(amount <= 100000) {
            console.log("CEO Approved");
            return true;
        }
        return false;
    }
}


const automaticPortfolioApprover = new LaedsApprover();
const manualPortfolioApprover = new ManagerApprover();
const ceo = new CEOApprover();

automaticPortfolioApprover.setNext(manualPortfolioApprover).setNext(ceo);

automaticPortfolioApprover.handle(1000);
automaticPortfolioApprover.handle(10000);
automaticPortfolioApprover.handle(100000);