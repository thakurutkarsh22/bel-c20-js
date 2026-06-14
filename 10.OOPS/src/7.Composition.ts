/**
 * Composition "HAS - A"
 * 
 * 
 * analogy :  build a robot, prebuild model of robot. (we are stuck with that model) -> prebuild model dosent have camera
 * so dosent matter what we add on top of it, it will not have camera.
 * 
 * composition = what part you need, (2 bolts, 1 screw, 1 wheel, camera, arm)
 * 
 * 
 * // Robot -> base class 
 *  - name
 *  - price
 *  - manufacturingid
 * 
 * 
 * cleaning robot extends Robot ->  cleans()
 * 
 * flying robot extends Robot ->  fly() 
 * 
 * flycleanRobot extend robot ->  fly() + cleans()
 * 
 */


// composition 
// aim is to create single purpose classes

class Mover {
    move(): string {
        return "moving on wheels";
    }
}

class Flyer {
    fly(): string {
        return "flying in the sky";
    }
}

class Cleaner {
    clean(): string {
        return "cleaning the floor";
    }
}


// now we create a robot which can fly clean and move on wheels 

//SuperCleaningRobot has a MOver , has a flyer, has a cleaner 

class SuperCleaningRobot {
    name: String;
    price: number;
    manufacturingId: string;

    constructor(name: string, price: number, manufacturingId: string) {
        this.name = name;
        this.price = price;
        this.manufacturingId = manufacturingId;
    }

    private mover = new Mover();
    private flyer = new Flyer();
    private cleaner = new Cleaner();

    public work(): void {
        console.log(`${this.name} is working, ${this.mover.move()}, ${this.flyer.fly()}, ${this.cleaner.clean()}`);
    }

}

const superCleaningRobot = new SuperCleaningRobot("Super Cleaning Robot", 1000, "1234567890");
superCleaningRobot.work();


class MoveCleanerRobot {
    name: String;
    price: number;
    manufacturingId: string;

    constructor(name: string, price: number, manufacturingId: string) {
        this.name = name;
        this.price = price;
        this.manufacturingId = manufacturingId;
    }
    private mover = new Mover();
    private cleaner = new Cleaner();

    public work(): void {
        console.log(`${this.name} is working, ${this.mover.move()}, ${this.cleaner.clean()}`);
    }
}

const moveCleanerRobot = new MoveCleanerRobot("Move Cleaner Robot", 1000, "1234567890");
moveCleanerRobot.work();