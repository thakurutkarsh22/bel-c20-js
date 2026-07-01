import IPricingStratergy from "./IPricingStratergy";



abstract class BasePricing implements IPricingStratergy {

    abstract ratePerHour(): number;
    abstract minCharges(): number;

    calculate(duration: number): number {
        const rate = this.ratePerHour();
        const minCharges = this.minCharges();
        return rate * duration + minCharges;
    }

    
}

export default BasePricing;