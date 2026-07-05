import { buildSpotsLayout, DEFAULT_LAYOUT } from "./Config/SpotLayout";
import VehicleType from "./enums/VehicleType";
import VehicleFactory from "./Factory/VehicleFactory";
import DisplayBoard from "./Observers/DisplayBoard";
import MobileNotifications from "./Observers/MobileNotifications";
import ParkingLot from "./Service/ParkingLot";

console.log("Parking Lot setup ready");


/**
 *  
 *  1. How big of a parking lot do we need ?
 *  2. if we have 1 floor, how man exists and entry points we need ? 
 *  3. how many floors.
 *  4. types of vehicle.
 *  5. types of spots. (parking for women, electric vehicle, normal spots)
 *  6. can person prebook.  
 * 
 *  5.any emergeny how will handle it.  
 * 
 */

/**
 * models: 
 * Vihicle
 * Parking Lot 
 * Ticket
 * 
 * 
 * Observation: 
 * -> bloard notification 
 * -> MObile notification
 * 
 * 
 * Stratergy:
 * -> Pricing
 * 
 * 
 * 
 * factory Pattern: 
 * -> vehicle 
 * -> Pricing
 * 
 */

// CLIENT

const lot = ParkingLot.getInstance(buildSpotsLayout(DEFAULT_LAYOUT));

lot.addObserver(new DisplayBoard("Main Board"));
lot.addObserver(new MobileNotifications("Owner's Mobile"));
lot.addObserver(new MobileNotifications("Manager's Mobile"));


// vehicle 
const car = VehicleFactory.getVehicle(VehicleType.CAR, "UP14-CD-1234"); // Plate Number
const bike = VehicleFactory.getVehicle(VehicleType.BIKE, "UP14-CD-1235"); // Plate Number
const truck = VehicleFactory.getVehicle(VehicleType.TRUCK, "UP14-CD-1236"); // Plate Number
const car2 = VehicleFactory.getVehicle(VehicleType.CAR, "UP14-CD-1237"); // Plate Number
const bike2 = VehicleFactory.getVehicle(VehicleType.BIKE, "UP14-CD-1238"); // Plate Number
const truck2 = VehicleFactory.getVehicle(VehicleType.TRUCK, "UP14-CD-1239"); // Plate Number


// park the vehicle
const ticket = lot.park(car);
const ticket2 = lot.park(bike);
const ticket3 = lot.park(truck);
const ticket4 = lot.park(car2);
const ticket5 = lot.park(bike2);
const ticket6 = lot.park(truck2);

// unpark the vehicle

const price = lot.unpark( ticket !== null ? ticket.getId() : "");
const price2 = lot.unpark(ticket2 !== null ? ticket2.getId() : "");
const price3 = lot.unpark(ticket3 !== null ? ticket3.getId() : "");
const price4 = lot.unpark(ticket4 !== null ? ticket4.getId() : "");
const price5 = lot.unpark(ticket5 !== null ? ticket5.getId() : "");
const price6 = lot.unpark(ticket6 !== null ? ticket6.getId() : "");

console.log("Price: ", price);
console.log("Price2: ", price2);
console.log("Price3: ", price3);
console.log("Price4: ", price4);
console.log("Price5: ", price5);
console.log("Price6: ", price6);





