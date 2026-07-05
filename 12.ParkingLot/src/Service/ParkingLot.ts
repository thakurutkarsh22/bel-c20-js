import VehicleType from "../enums/VehicleType";
import PricingFactory from "../Factory/PricingFactory";
import ParkingSpot from "../Models/ParkingSpot";
import Ticket from "../Models/Ticket";
import Vehicle from "../Models/Vehicle";
import IObserver from "../Observers/IObserver";



class ParkingLot {
    // singleton pattern
    private static instance: ParkingLot | null = null;
    private parkingSpots: ParkingSpot[] = [];

    private observers: IObserver[] = []; 

    // 1. probelm no 1 with arrays we have to use binary search to find the ticket, so it will be O(logn)
    // private tickets: Ticket[]; // 10000000 // (nlogn) 
    // this solves our problem of searching
    // hashmap is a datastructure which is inside memory (RAM)
    private tickets: Map<string, Ticket> = new Map(); // ticketId -> Ticket // amortized O(1)

    private ticketCounter: number = 1;




    private constructor(spots: ParkingSpot[] = []) {
        this.parkingSpots = spots;
    }



    static getInstance(spots: ParkingSpot[]): ParkingLot {
        if (!ParkingLot.instance) {
            ParkingLot.instance = new ParkingLot(spots);
        }
        return ParkingLot.instance;
    }

    reset() {
        ParkingLot.instance = null;
    }

    addObserver(observer: IObserver): void {
        this.observers.push(observer);
    }

    notify(message: string): void {
        this.observers.forEach(observer => observer.update(message));
    }

    park(vehicle: Vehicle): Ticket | null {
        // 1. find a spot and reserve it
        let choosenSpot: ParkingSpot | null = null;

        for(const spot of this.parkingSpots) {
            if(spot.canFit(vehicle)){
                choosenSpot = spot;
                break;
            }
        }
        
        // 2. nothing fits || we cant park
        if(choosenSpot === null) {
            console.log("No spot found" + vehicle.getPlateNumber(), "Cannot park");
            return null;
        }

        // 3. generate a ticket id 
        const ticketID: string = "TICKET-" + this.ticketCounter++;


        // 4. park the vehicle 
        choosenSpot.park(vehicle);

        // 5. when they exit we have to get the money and unpark the vehicle
        // PricingFactory.getPricing(vehicle.getType())
        const vehiclePricing = PricingFactory
        .getPricing(vehicle.getType()); // { calculate, ratePerHour, minCharges }


        // 6. create a ticket | if these parameters are getting bigger and bigger change it to builder pattern
        const ticket: Ticket = new 
        Ticket(ticketID, vehicle, new Date(), null, choosenSpot, vehiclePricing);
        
        // 7 set the hash map
        this.tickets.set(ticketID, ticket);

        // 8 notify 
        this.notify("Vehicle parked: " + vehicle.getPlateNumber());


        // return the ticket


        return ticket;

    } 


    unpark(ticketID: string): number | null {
        // 1. get the ticket id | checking if the ticket is valid
        const ticket = this.tickets.get(ticketID);

        if(ticket === undefined || ticket === null) {
            console.log("ticket not found", ticketID);
            return null;
        }

        // 2. get the price 
        const price = ticket.getCost();

        // 3. // unpark the vehicle free the spot 
        const spot = ticket.getParkingSpot();
        spot.unpark();

        // 4. remove the ticket 
        // kinda reconcilliation 
        this.tickets.delete(ticketID);

        // 5. notify 
        this.notify("Vehicle unparked: " + ticket.getVehicle().getPlateNumber());

        return price;
    }   
}

export default ParkingLot;