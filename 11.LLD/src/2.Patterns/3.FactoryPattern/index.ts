/**
 * Factory Pattern
 * 
 * example:
 * - create a factory class that creates objects of a class
 * - create a factory class that creates objects of a class
 * 
 * // i want to have the decision of object creation from the factory class and client 
 */


// bad example:

/*
class Truck {
    deliver(): string {
        return "delivery by road";
    }
}

class Ship {
    deliver(): string {
        return "delivery by sea";
    }
}

class Drone {
    deliver(): string {
        return "delivery by air";
    }
}


// client - me - developer


const kinds = ["truck", "ship", "drone"];

let transport = null;

for(const kind of kinds) {
    if(kind === "truck") {
        transport = new Truck()
        // he want to create the papers 
    } else if(kind === "ship") {
        transport = new Ship()
    } else if(kind === "drone") {
        transport = new Drone()
    }
}

*/


// Good example:

interface ITransport {
    deliver(): string;
}

class Ship implements ITransport {
    deliver(): string {
        return "delivery by sea";
    }
}

class Truck implements ITransport {
    deliver(): string {
        return "delivery by road";
    }
}

class Drone implements ITransport {
    deliver(): string {
        return "delivery by air";
    }
}


class TransportFactory {
    static createTransport(type: string): ITransport {
        switch(type) {
            case "truck":
                return new Truck();
            case "ship":
                return new Ship();
            case "drone":
                return new Drone();
            default:
                throw new Error("Invalid transport type");
        }

        // papers 
    }
}


// client code 


const drone = TransportFactory.createTransport("drone");
console.log(drone.deliver());


const truck = TransportFactory.createTransport("truck");
console.log(truck.deliver());

const ship = TransportFactory.createTransport("ship");
console.log(ship.deliver());