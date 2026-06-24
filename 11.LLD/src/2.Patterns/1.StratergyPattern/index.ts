// stratergy pattern is a behavioral pattern




class PaymentProcessorForSmallerShops {
    process(amount: number, type: string) {
        if(type === "upi") {
            console.log(`Processing UPI payment of ${amount}`);
        } else if(type === "card") {
            console.log(`Processing card payment of ${amount}`);
        } else if(type === "paypal") {
            console.log(`Processing paypal payment of ${amount}`);
        }

        // ini future there might be an option for bitcoin payment || modiificaton
        else if(type === "bitcoin") {
            console.log(`Processing bitcoin payment of ${amount}`);
        }
    }
}



interface IPaymentMethod {
    pay(amount: number): void;
}

class UpiPaymentStratergy implements IPaymentMethod {
    pay(amount: number): void {
        // actual nCPI 
        console.log(`Processing UPI payment of ${amount}`);
    }
}

class CardPaymentStratergy implements IPaymentMethod {
    pay(amount: number): void {
        // Master card, visa
        console.log(`Processing card payment of ${amount}`);
    }
}


class PaypalPaymentStratergy implements IPaymentMethod {
    pay(amount: number): void {
        console.log(`Processing paypal payment of ${amount}`);
    }
}

class BitcoinPaymentStratergy implements IPaymentMethod {
    pay(amount: number): void {
        console.log(`Processing bitcoin payment of ${amount}`);
    }
}


// machine that has to process payment
class PaymentProcessor {
    paymentMethod: IPaymentMethod;
    constructor(paymentMethod: IPaymentMethod) {
        this.paymentMethod = paymentMethod;
    }
    process(amount: number) {
        this.paymentMethod.pay(amount);
    }
}


const paymentProcessor = new PaymentProcessor(new UpiPaymentStratergy());
paymentProcessor.process(100);

const paymentProcessorWithCard = new PaymentProcessor(new CardPaymentStratergy());
paymentProcessorWithCard.process(100);

const paymentProcessorWithPaypal = new PaymentProcessor(new PaypalPaymentStratergy());
paymentProcessorWithPaypal.process(100);

const paymentProcessorWithBitcoin = new PaymentProcessor(new BitcoinPaymentStratergy());
paymentProcessorWithBitcoin.process(100);

