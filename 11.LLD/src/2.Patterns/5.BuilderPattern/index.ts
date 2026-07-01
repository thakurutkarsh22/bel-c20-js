/**
 * 
 * Builder Pattern
 */

/*
 BAD EXAMPLE:

class BurgerBad {

    private size:  "large" | "medium" | "small";
    private pattyCount: number;
    private lettuce: boolean;
    private tomato: boolean;
    private onion: boolean
    private sauce: boolean;


    constructor(size: "large" | "medium" | "small", 
        pattyCount: number, 
        lettuce: boolean, tomato: boolean, onion: boolean, sauce: boolean) {

        this.size = size;
        this.pattyCount = pattyCount;
        this.lettuce = lettuce;
        this.tomato = tomato;
        this.onion = onion;
        this.sauce = sauce;
    }


    makeOrder() {
        const parts: string[] = [];
        for(let i = 0; i < this.pattyCount; i++) {
            parts.push("patty");
        }

        if(this.lettuce) {
            parts.push("lettuce");
        }

        if(this.tomato) {
            parts.push("tomato");
        }

        if(this.onion) {
            parts.push("onion");
        }

        if(this.sauce) {
            parts.push("sauce");
        }

        return parts.join(", ");
    }
}

// client code
const burgetWithEveryThing = new BurgerBad("large", 2, true, true, true, true);
const burgetWithEveryThing = new BurgerBad("large", 2, "datacloud", "industry", "ai team", "sales");
console.log(burgetWithEveryThing.makeOrder());


const burgetWithCheese = new BurgerBad("medium", 3, false, true, false, false);
console.log(burgetWithCheese.makeOrder());

*/


// Good example:


type BurgerSize = "large" | "medium" | "small";

class Burger {

    size: BurgerSize = "large";
    ingredients: string[] = [];

    makeOrder(): string {
        return `${this.size } ` + this.ingredients.join(", ");
    }
}


class BurgerBuilder {
    private burger: Burger = new Burger(); // {size: "large", ingredients: []}


    setSize(size: BurgerSize): BurgerBuilder {
        this.burger.size = size; // { size: "small", ingredients: [] }
        return this; // -> this keyword enables the chaining of methods
    }

    addCheese(): BurgerBuilder {
        this.burger.ingredients.push("cheese"); // { size: "small", ingredients: ["cheese"] }
        return this; // -> this keyword enables the chaining of methods
    }

    addLettuce(): BurgerBuilder {
        this.burger.ingredients.push("lettuce"); // { size: "large", ingredients: ["lettuce", "tomato", "onion", "cheese", "lettuce"] }
        return this; // -> this keyword enables the chaining of methods
    }

    addTomato(): BurgerBuilder {
        this.burger.ingredients.push("tomato"); // { size: "large", ingredients: ["lettuce", "tomato", "onion", "cheese", "lettuce", "tomato"] }
        return this; // -> this keyword enables the chaining of methods
    }

    addOnion(): BurgerBuilder {
        this.burger.ingredients.push("onion"); // { size: "large", ingredients: ["lettuce", "tomato", "onion", "cheese", "lettuce", "tomato", "onion"] }
        return this; // -> this keyword enables the chaining of methods
    }

    addSauce(): BurgerBuilder {
        this.burger.ingredients.push("sauce"); // { size: "large", ingredients: ["lettuce", "tomato", "onion", "cheese", "lettuce", "tomato", "onion", "sauce"] }
        return this; // -> this keyword enables the chaining of methods
    }

    build(): Burger {
        // this -> BurgerBuilder
        return this.burger;
    }
}


const burgetWithEveryThing = new BurgerBuilder() // burgetWithEveryThing = {size: "large", ingredients: []}


burgetWithEveryThing
.setSize("small")
.addCheese()
.addLettuce()
.addTomato()
.addOnion()
.addSauce()
.build();


console.log(burgetWithEveryThing);



const burgerWithCheeseandTomatoOnly = new BurgerBuilder()

burgerWithCheeseandTomatoOnly
.addCheese()
.addTomato()
.build();


console.log(burgerWithCheeseandTomatoOnly);