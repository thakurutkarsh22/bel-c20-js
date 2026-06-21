// - - - - - - - - - - - - - - - - - -- - - - SOLID Principles - - - - - - - - - - - - - - - --  -


// 1. S - Single responsibility principle


// function sum (a, b) {

//     z = 12;

//     // api call () 

//     return a + b;
// }


// Example bad Example : 
/*
class User {
    name: string;
    email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    // Responsibility 1 of this class : to represent the user only
    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    setName(name: string) {
        this.name = name;
    }

    setEmail(email: string) {
        this.email = email;
    }

    // responsibility 2: 
    sendWelcomeEmail() {
        console.log(`Welcome ${this.name} to the platform ${this.email}`);
    }

    // save user to database | responsibility 3: 
    saveUserToDatabase() {
        console.log(`Saving user ${this.name} to database`);
    }
}

const user = new User("John", "john@example.com");
const user2 = new User("Jane", "jane@example.com");
*/


//  GOOD Example : 

// idea was this class is only for the user representatoin and nothing else
/*
class User {
    name: string;
    email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    // Responsibility 1 of this class : to represent the user only
    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    setName(name: string) {
        this.name = name;
    }

    setEmail(email: string) {
        this.email = email;
    }
}


class EmailNotification {
    email: string;

    constructor(email: string) {
        this.email = email;
    }

    sendWelcomeEmail() {
        console.log(`Welcome ${this.email} to the platform`);
    }

    sendSMS() {

    }

}

class UserService {
    saveUserToDatabase(user: User) {
        console.log(`Saving user ${user.name} to database`);
    }
}

*/


// 2. O - Open/Closed principle
// open for extension (inheritance), closed for modification

// Bad Example : 
/*
class PaymentProcessorForSmallerShops {
    process(amount: number, type: string) {
        if(type === "upi") {
            console.log(`Processing UPI payment of ${amount}`);
        } else if(type === "card") {
            console.log(`Processing card payment of ${amount}`);
        } else if(type === "paypal") {
            console.log(`Processing paypal payment of ${amount}`);
        }

        // ini future there might be an option for bitcoin payment || modiificaton
        else if(type === "bitcoin") {
            console.log(`Processing bitcoin payment of ${amount}`);
        }
    }
}

class 
*/

// Good Example : 
/*
interface paymentMethod {
    pay(amount: number): void;
}


class UpiPayment implements paymentMethod {
    pay(amount: number): void {
        console.log(`Processing UPI payment of ${amount}`);
    }
}

class CardPayment implements paymentMethod {
    pay(amount: number): void {
        console.log(`Processing card payment of ${amount}`);
    }
}

class BitcoinPayment implements paymentMethod {
    pay(amount: number): void {
        console.log(`Processing bitcoin payment of ${amount}`);
    }
}
*/


// 3. L - Liskov substitution principle
// Child class should replace parent without breaking behavior.
// where you are able to use class A (parent), ideally you should be able to use class B (child) as well.



// Bad Example : 
/*
class Bird {
    fly() {
        console.log("Bird is flying");
    }
}


// sparrow is a Bird
class Sparrow extends Bird {
    fly() {
        console.log("Sparrow is flying");
    }
}

// Penguin is a Bird but dont fly

class Penguin extends Bird {
    fly() {
        // handleing that we dont fly 
        console.log("Penguin is not flying");
    }
}


// Implmentation 
const sparrow = new Sparrow();
sparrow.fly(); // this .fly is flaky

const penguin = new Penguin();
penguin.fly(); // error 

*/


// Good Example : 

/*
interface IBird  {
    move(): void;
}

class FlyingBird implements IBird {
    move(): void {
        console.log("FLIES");
    }
}

class WalkingBird implements IBird {
    move(): void {
        console.log("WALKS");
    }
}


class Penguin extends WalkingBird {
    move(): void {
        console.log("WALKS");
    }
}

class Sparrow extends FlyingBird {
    move(): void {
        console.log("FLIES");
    }
}


const sparrow = new Sparrow();
sparrow.move(); // this move function is a predictable function (it do not )

const penguin = new Penguin();
penguin.move();

// what i see 
// a lot of abstraction 
// a lot of classes 

*/


// 4. I - Interface segregation principle
// Clients should not be forced to depend on interfaces they do not use.
// Interface should be small and focused.


// Bad Example : 
/*
interface Worker {
    work(): void;
    eat(): void;
    sleep(): void;
}

class HumanWorker implements Worker {
    work(): void {
        console.log("Human is working");
    }
    eat(): void {
        console.log("Human is eating");
    }
    sleep(): void {
        console.log("Human is sleeping");
    }
}

class AnimalWorker implements Worker {
    work(): void {
        console.log("Animal is working");
    }
    eat(): void {
        console.log("Animal is eating");
    }
    sleep(): void {
        console.log("Animal is sleeping");
    }
}


class RobotWorker implements Worker {
    work(): void {
        console.log("Robot is working");
    }
    eat(): void {
        throw new Error("Robot does not eat");
    }
    sleep(): void {
        throw new Error("Robot does not sleep");
    }
}


const humanWorker = new HumanWorker();
humanWorker.work();
humanWorker.eat();
humanWorker.sleep();

const animalWorker = new AnimalWorker();
animalWorker.work();
animalWorker.eat();
animalWorker.sleep();

const robotWorker = new RobotWorker();
robotWorker.work();
robotWorker.eat(); // error
robotWorker.sleep(); // error

*/


// Good Example : 

/*
interface IWorker {
    work(): void;
}
interface IEater {
    eat(): void;
}
interface ISleeper {
    sleep(): void;
}

class HumanWorker implements IWorker, IEater, ISleeper {
    work(): void {
        console.log("Human is working");
    }
    eat(): void {
        console.log("Human is eating");
    }
    sleep(): void {
        console.log("Human is sleeping");
    }
}

class RobotWorker implements IWorker {
    work(): void {
        console.log("Robot is working");
    }
}


const humanWorker = new HumanWorker();
humanWorker.work();
humanWorker.eat();
humanWorker.sleep();

const robotWorker = new RobotWorker();
robotWorker.work();

*/




// Investion of control (IoC)

/*
function getData() {
    return "data";
}

getData(); // control is with me 

*/



// Google cloud -> in google cloud which is tracking my visits to website has to run this getData code post that 
// we are giving control of this funciton to google 
// inversion of control (IoC)




// 5. D - Dependency inversion principle



//  DB service -> postgres 
// user service

/*
class MySqlService {
    connect() {
        console.log("Connected to MySQL");
    }

    query(sql: string) {
        console.log("Executing SQL query: ", sql);
    }

    save(data: any) {
        console.log("Saving data to MySQL: ", data);
    }
}

class PostgresService {
    connect() {
        console.log("Connected to Postgres");
    }
    query(sql: string) {
        console.log("Executing SQL query: ", sql);
    }
    save(data: any) {
        console.log("Saving data to Postgres: ", data);
    }
}


// userService is TOTALLY dependent on mySqlService
// if we have to use postgrwss in user service what to do ? 

class UserService {
    mySqlService: MySqlService;

    constructor(mySqlService: MySqlService) {
        this.mySqlService = mySqlService;
    }

    getUser(id: number) {
        this.mySqlService.query(`SELECT * FROM users WHERE id = ${id}`);
    }

    saveUser(user: any) {
        this.mySqlService.save(user);
    }
}

*/


// Good Example : 
/*
interface IDataBaseService {
    connect(): void;
    query(sql: string): void;
    save(data: any): void;
}

class MySqlService implements IDataBaseService {
    connect(): void {
        console.log("Connected to MySQL");
    }
    query(sql: string): void {
        console.log("Executing SQL query: ", sql);
    }
    save(data: any): void {
        console.log("Saving data to MySQL: ", data);
    }
}

class PostgresService implements IDataBaseService {
    connect(): void {
        console.log("Connected to Postgres");
    }
    query(sql: string): void {
        console.log("Executing SQL query: ", sql);
    }
    save(data: any): void {
        console.log("Saving data to Postgres: ", data);
    }
}


class UserService {
    dbService: IDataBaseService;
    constructor(dbService: IDataBaseService) {
        this.dbService = dbService;
    }

    getUser(id: number) {
        this.dbService.query(`SELECT * FROM users WHERE id = ${id}`);
    }

    saveUser(user: any) {
        this.dbService.save(user);
    }
}


const userServiceWithMySql = new UserService(new MySqlService());
const userServiceWithPostgres = new UserService(new PostgresService());

userServiceWithMySql.getUser(1);
userServiceWithMySql.saveUser({ id: 1, name: "John", email: "john@example.com" });

userServiceWithPostgres.getUser(1);
userServiceWithPostgres.saveUser({ id: 1, name: "John", email: "john@example.com" });

*/

