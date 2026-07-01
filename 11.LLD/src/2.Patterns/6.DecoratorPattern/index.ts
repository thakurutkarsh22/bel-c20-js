/***
 * Decorator Pattern
 * 
 * 
 * when you feel there is going to be EXPLOSION of classes and methods, use decorator pattern
 * 
 * 
 */


// bad example:

/*
class PlainCoffee {
    cost(): number {
        return 10;
    }

    description(): string {
        return "Plain Coffee";
    }
}

class CoffeeWithSugar {
    cost(): number {
        return 12;
    }

    description(): string {
        return "Coffee with Sugar";
    }
}

class CoffeeWithMilk {
    cost(): number {
        return 15;
    }

    description(): string {
        return "Coffee with Milk";
    }
}

class CoffeeWithSugarAndMilk {
    cost(): number {
        return 17;
    }

    description(): string {
        return "Coffee with Sugar and Milk";
    }
}

// the problem arises when you have a new product caramel 
// new 4 combination willbe created (along side the previos 4) = 8 classes


class CoffeeWithCaramel {
    cost(): number {
        return 19;
    }

    description(): string {
        return "Coffee with Caramel";
    }
}

class CoffeeWithCaramelAndSugar {
    cost(): number {
        return 21;
    }

    description(): string {
        return "Coffee with Caramel and Sugar";
    }
}

class CoffeeWithCaramelAndSugarAndMilk {
    cost(): number {
        return 23;
    }

    description(): string {
        return "Coffee with Caramel and Sugar and Milk";
    }
}
    */

// good example:

interface ICoffee {
    cost(): number;
    description(): string;
}

class PlainCoffee implements ICoffee {
    cost(): number {
        return 10;
    }

    description(): string {
        return "Plain Coffee";
    }
}

class CoffeeAddOns implements ICoffee {
    coffee: ICoffee;
    constructor(coffee: ICoffee) {
        this.coffee = coffee;
    }

    cost(): number {
        return this.coffee.cost();
    }

    description(): string {
        return this.coffee.description();
    }
}

class Milk extends CoffeeAddOns {
    constructor(coffee: ICoffee) {
        super(coffee);
    }

    cost(): number {
        return this.coffee.cost() + 5;
    }
}

class Sugar extends CoffeeAddOns {
    constructor(coffee: ICoffee) {
        super(coffee);
    }

    cost(): number {
        return this.coffee.cost() + 3;
    }
}

class Caramel extends CoffeeAddOns {
    constructor(coffee: ICoffee) {
        super(coffee);
    }

    cost(): number {
        return this.coffee.cost() + 17;
    }
}

class WhippedCream extends CoffeeAddOns {
    constructor(coffee: ICoffee) {
        super(coffee);
    }

    cost(): number {
        return this.coffee.cost() + 10;
    }
}

let coffee: ICoffee = new PlainCoffee(); // 10
coffee = new Milk(coffee); // 15
coffee = new Sugar(coffee);// 18
coffee = new Caramel(coffee); // 35
coffee = new WhippedCream(coffee); // 45

console.log(coffee.cost());
console.log(coffee.description());


const {cost, description} = coffee;