import VehicleType from "../enums/VehicleType";
import Vehicle from "../Models/Vehicle";

class VehicleFactory {
    static getVehicle(vehicleType: VehicleType, plateNumber: string): Vehicle {
       return new Vehicle(vehicleType, plateNumber);
    }
}

export default VehicleFactory;