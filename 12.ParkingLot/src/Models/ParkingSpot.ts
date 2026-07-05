import VehicleType from "../enums/VehicleType";
import Vehicle from "./Vehicle";

class ParkingSpot {
    private id: string; // 1 simple id , (for loop determining the sports)
    private spotType: VehicleType; // BIKE | CAR | TRUCK
    private vehicle: Vehicle | null;

    constructor(id: string, spotType: VehicleType, vehicle: Vehicle | null) {
        this.id = id;
        this.spotType = spotType;
        this.vehicle = vehicle;
    }

    getId(): string {
        return this.id;
    }

    getSpotType(): VehicleType {
        return this.spotType;
    }

    getVehicle(): Vehicle | null {
        return this.vehicle;
    }

    // ------- your methods here | behaviour of the parking spot -------

    isAvailable(): boolean {
        return this.vehicle === null || this.vehicle === undefined;
    }

    canFit(customerVehicle: Vehicle): boolean {
        // 1. is it available ? 
        if(!this.isAvailable()) {
            return false;
        }
        // 2. this customerVehicle can fit in this spot ? (25) 
        const customerVehicleType = customerVehicle.getType();
        if(customerVehicleType !== this.spotType) {
            return false;
        }

        // 3. this spot is big enough for this customerVehicle ? (25) 
        return true;
    }

    park(customerVehicle: Vehicle): boolean {
        // are we fit to park
        if(!this.canFit(customerVehicle)) {
            return false;
        }
        // 2. park the vehicle
        this.vehicle = customerVehicle;
        return true;
    }

    unpark(): Vehicle | null {
        const parkedVehicle = this.vehicle;
        this.vehicle = null;
        return parkedVehicle;

    }


}

export default ParkingSpot;