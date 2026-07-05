
/****
 * uuid v4 samples:
 * 12baedfd-bcd1-4756-b346-fc0914074c62
 * 0c1c3696-97ab-4058-b759-2eecd396ac4c
 * 1a7696f1-77a8-4836-ab64-2aee2f98a2bb
 * 2dc7325f-911e-4411-8114-b6a5f618238b
 * 5312cfeb-19fd-4f11-b601-2e6e603f8516 4th july - 12am 
 * ab755e7a-c246-4abd-a4bd-53f76efb2f68 4th july - 1 am
 * bfc68689-d9b1-4ff1-a3c2-e81cda4fc195
 * 5b97bb76-3ae1-49a9-a0eb-544b758743de
 * 088cab13-751c-4fb1-9c22-950080778888
 * d9519a4f-b5f4-4fe1-bc59-40c8b4ed2b1b
 */

import BikePricing from "../Stratergy/BikePricing";
import IPricingStratergy from "../Stratergy/IPricingStratergy";
import ParkingSpot from "./ParkingSpot";
import Vehicle from "./Vehicle";

/**
 * uuid v7 samples (time-ordered):
 * 019f1e87-ce42-7c59-8ab2-03a49bc50e14
 * 019f1e87-ce45-7dd7-8ee2-f47399fdcf82
 * 019f1e87-ce45-72b7-a69f-7daaace63aec
 * 019f1e87-ce45-7ba0-82bc-d8e938ef001d
 * 019f1e87-ce45-7d41-b651-297ccf0323ab
 * 019f1e87-ce45-75a9-9674-f864c993ee22
 * 019f1e87-ce45-7520-b953-9e370b8bcddd
 * 019f1e87-ce45-7b70-94a3-771f0858c1d6
 * 019f1e87-ce45-7397-bc88-e1c5668a48cf
 * 019f1e87-ce45-72b0-8dfe-a6edbd9e9b58
 */


// Range Queries - how many people parked between 12am and 1am on 4th july.
/**
 * 1
 * 2
 * 3
 * 4
 * 5
 * 6
 * 
 * 
 * 92183yo3ur1831
 * 23875278r287g2
 * 8237r02837gr832g3
 * 
 * 
 * 
 *     // for id ||  twitter snowflake. | Ticketmaster 
    // uuid4 (quite random) | uuid7 (not radom, but sequential) | 
        /// 1. time. 
    // 2. price calculation 
    // 3. entry time 
    // 4. exit time
    // 3hours * 

 * 
 */

class Ticket {

    static readonly SECONDS_IN_HOUR = 1000 * 60 * 60;

    private id: string;  // uniqueforLot + vehicleNumber
    private vehicle: Vehicle;
    private entryTime: Date;
    private exitTime: Date | null;
    private parkingSpot: ParkingSpot;

    // pricing strategy (dependency injection)
    private prisingStratergy: IPricingStratergy; // BikePricing | CarPricing | TruckPricing


    constructor(id: string, vehicle: Vehicle, entryTime: Date, exitTime: Date | null, parkingSpot: ParkingSpot, prisingStratergy: IPricingStratergy) {
        this.id = id;
        this.vehicle = vehicle;
        this.entryTime = entryTime;
        this.exitTime = exitTime;
        this.parkingSpot = parkingSpot;
        this.prisingStratergy = prisingStratergy;
    }

    getId(): string {
        return this.id;
    }

    getVehicle(): Vehicle {
        return this.vehicle;
    }

    getEntryTime(): Date {
        return this.entryTime;
    }

    getExitTime(): Date | null {
        return this.exitTime;
    }

    getParkingSpot(): ParkingSpot {
        return this.parkingSpot;
    }

    // getPricingStrategy(): IPricingStratergy {
    //     return this.pricingStrategy;
    // }

    // ------ our methods here ------------ 

    // when I exit someone (system will call this method) and calculate the duration
    getDuration(exittime: Date = new Date()): number {
        this.exitTime = exittime;
        const elapsedTime = this.exitTime.getTime() - this.entryTime.getTime();
        return elapsedTime / (Ticket.SECONDS_IN_HOUR);
    }

    getCost(): number {
        const duration = this.getDuration();
        const price = this.prisingStratergy.calculate(duration);
        return price;
    }

}

export default Ticket;



