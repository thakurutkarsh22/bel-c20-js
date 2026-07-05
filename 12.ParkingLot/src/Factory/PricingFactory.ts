import VehicleType from "../enums/VehicleType";
import CarPricing from "../Stratergy/CarPricing";
import IPricingStratergy from "../Stratergy/IPricingStratergy";
import TruckPricing from "../Stratergy/TruckPricing";
import BikePricing from "../Stratergy/BikePricing";



class PricingFactory {
    static getPricing(vehicleType: VehicleType): IPricingStratergy {
        switch(vehicleType) {
            case VehicleType.BIKE:
                return new BikePricing();
            case VehicleType.CAR:
                return new CarPricing();
            case VehicleType.TRUCK:
                return new TruckPricing();
                default:
                    throw new Error("Invalid vehicle type");
        }
    }
}


export default PricingFactory;