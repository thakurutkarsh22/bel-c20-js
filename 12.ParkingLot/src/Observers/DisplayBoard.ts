import IObserver from "./IObserver";

class DisplayBoard implements IObserver { 
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    update(message: string): void {
        console.log(`DisplayBoard: ${message}`);
    }

    getName(): string {
        return this.name;
    }

}

export default DisplayBoard;