import BasePricing from "./BasePricing";

class TruckPricing extends BasePricing {
    ratePerHour(): number {
        return 250;
    }
    minCharges(): number {
        return 500;
    }
}

export default TruckPricing;