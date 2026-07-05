import VehicleType from "../enums/VehicleType";
import ParkingSpot from "../Models/ParkingSpot";

function buildSpotsLayout(layout: SpotLayout): ParkingSpot[]  {
    const spots: ParkingSpot[] = [];


    for (const [vehicleType, count] of Object.entries(layout)) {
        for (let i = 0; i < count; i++) {
            spots.push(new ParkingSpot(`${vehicleType}-${i}`, vehicleType as VehicleType, null));
        }
    }

    return spots;
}


const DEFAULT_LAYOUT: SpotLayout = {
    [VehicleType.BIKE]: 10,
    [VehicleType.CAR]: 10,
    [VehicleType.TRUCK]: 10,
}

// const TEST_LAYOUT: SpotLayout = {
//     [VehicleType.BIKE]: 1,
//     [VehicleType.CAR]: 1,
//     [VehicleType.TRUCK]: 1,
// }

type SpotLayout = {
    [key in VehicleType]: number;
}


export { buildSpotsLayout, DEFAULT_LAYOUT };