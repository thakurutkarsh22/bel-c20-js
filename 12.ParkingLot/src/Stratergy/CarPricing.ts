import BasePricing from "./BasePricing";

class CarPricing extends BasePricing {
    ratePerHour(): number {
        return 20;
    }
    minCharges(): number {
        return 20;
    }
}

export default CarPricing;