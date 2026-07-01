/**
 * Observer Pattern
 * pub/sub  -> publisher/subscriber 
 * 
 * example:
 * - social media notifications
 * - email notifications
 * - sms notifications
 * - push notifications
 * - in app notifications
 * - in app notifications
 * 
 * 
 * when to use it 
 * -> you have one state chagen and you want to fan out to many independent listners
 * 
 * 
 * when not to use it 
 * -> you have one state change and you want to fan out to many dependent listners
 * 
 * 
 * 
 * 
 */



// Bad Example: 

/*
class ChannelBad {

    emailSvc = {
        send: (email: string) => {
            console.log(`Sending email to ${email}`);
        }
    }

    smsSvc = {
        send: (sms: string) => {
            console.log(`Sending sms to ${sms}`);
        }
    }

    pushSvc = {
        send: (push: string) => {
            console.log(`Sending push to ${push}`);
        }
    }

    xyz = {
        send: (xyz: string) => {
            console.log(`Sending xyz to ${xyz}`);
        }
    }


    upload(video: string) {
        this.emailSvc.send(video);
        this.smsSvc.send(video);
        this.pushSvc.send(video);

        // there is a tight coupling between the channel and the services
        // if we want to add a new service, we need to modify the upload method also
    }
}

new ChannelBad().upload("video.mp4");

*/

// good example:
// this contract every observer must follow
interface IObserver {
    notify(channel: string, video: string): void;
}

// unsubscribe 
function unsubscribe() {
}

//  subject that handles the observers
// when i cliclk bell icon this class will work. 
class ChannelGood {
    subscribers: IObserver[] = [];

    subscribe(observer: IObserver) {
        console.log(`${observer} subscribed`);
        this.subscribers.push(observer);
    }


    upload(channel: string, video: string) {
        this.subscribers.forEach(observer => observer.notify(channel, video));
    }
}




class UserObserver implements IObserver {

    constructor(private name: string) {
        this.name = name;
    }

    notify(channel: string, video: string): void {
        console.log(`User ${this.name} ${channel} uploaded a new video: ${video}`);
    }
}





// client code
const youtubeChannel = new ChannelGood();

const user1 = new UserObserver("John");
const user2 = new UserObserver("Jane");
const user3 = new UserObserver("Jim");


console.log("------ people discover your channel and wants to subscribe ------");

youtubeChannel.subscribe(user1);
youtubeChannel.subscribe(user2);
youtubeChannel.subscribe(user3);




setTimeout(() => {
    youtubeChannel.upload("youtube", "video.mp4");
}, 5000);


