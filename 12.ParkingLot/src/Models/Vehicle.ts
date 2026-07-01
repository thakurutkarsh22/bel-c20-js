import VehicleType from "../enums/VehicleType";

class Vehicle {
    private vehicleType: VehicleType;
    private plateNumber: string;


    constructor(vehicleType: VehicleType, plateNumber: string) {
        this.vehicleType = vehicleType;
        this.plateNumber = plateNumber;
    }

    getType(): VehicleType {
        return this.vehicleType;
    }   

    getPlateNumber(): string {
        return this.plateNumber;
    }
}

export default Vehicle;