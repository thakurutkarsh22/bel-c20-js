import IObserver from "./IObserver";

class MobileNotifications implements IObserver { 
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    update(message: string): void {
        console.log(`MobileNotifications: ${message}`);
    }

    getName(): string {
        return "MobileNotifications";
    }

}

export default MobileNotifications;