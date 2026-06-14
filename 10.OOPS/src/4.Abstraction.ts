/**
 * 
 * not sharing the implementation details.
 * 
 * analogy: we are driving a car, we use wheel, accelator, brake, 
 * we dont care about the internal combustion, fuel injection, spark timing, cylinders etc. 
 * all these things are hidden from us, we just have 3 controls (clutch, brake, accelerator)
 * 
 * 
 */


class CoffeeMachine {
    makeCoffee() {
        this.boilWater();
        this.grindCoffeeBeans();
        this.brewCoffee();
        console.log("Coffee is ready");
    }

    private boilWater() {
        console.log("Boiling water");
    }

    private grindCoffeeBeans() {
        console.log("Grinding coffee beans");
    }

    private brewCoffee() {
        console.log("Brewing coffee");
    }

}

const coffeeMachine = new CoffeeMachine();
coffeeMachine.makeCoffee();


/**
 * 
 * JSON.stringify(coffeeMachine) // this will not work because the private properties are not shared
 * array.sort() // quick sort, merge sort
 * fetch(url) // xhttpRequest  -> response -> data 
 */


/**
 * Abstraction vs encapsulation 
 * 
 * abstraction is a DESIGN GOAL (idea)
 * Encapsulation is a DESIGN IMPLEMENTATION (how will you enforce it) (private, getter, setter, protected)
 * 
 * 
 */