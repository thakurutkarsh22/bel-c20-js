interface IObserver {
    update(message: string): void;
    getName(): string;
}

export default IObserver;