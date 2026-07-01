import BasePricing from "./BasePricing";

class BikePricing extends BasePricing {
    ratePerHour(): number {
        return 10;
    }
    minCharges(): number {
        return 10;
    }

}

export default BikePricing;