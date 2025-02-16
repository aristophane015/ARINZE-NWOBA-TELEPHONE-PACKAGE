// Observer base class
class Observer {
    update(phoneNumber) {
        throw new Error("This method should be implemented by the subclass.");
    }
}

// Observer that prints the phone number
class PhoneNumberObserver extends Observer {
    update(phoneNumber) {
        console.log(`Dialing phone number: ${phoneNumber}`);
    }
}

// Observer that prints "Now Dialling"
class DiallingObserver extends Observer {
    update(phoneNumber) {
        console.log("Now Dialling");
    }
}

// Telephone class that manages phone numbers and observers
class Telephone {
    constructor() {
        this.phoneNumbers = []; // Store phone numbers
        this.observers = [];     // Store observers
    }

    // Add a phone number
    addPhoneNumber(phoneNumber) {
        this.phoneNumbers.push(phoneNumber);
    }

    // Remove a phone number
    removePhoneNumber(phoneNumber) {
        const index = this.phoneNumbers.indexOf(phoneNumber);
        if (index !== -1) {
            this.phoneNumbers.splice(index, 1);
        }
    }

    // Dial a phone number and notify observers
    dialPhoneNumber(phoneNumber) {
        if (this.phoneNumbers.includes(phoneNumber)) {
            this.notifyObservers(phoneNumber);
        } else {
            console.log("Phone number not found.");
        }
    }

    // Add an observer
    addObserver(observer) {
        this.observers.push(observer);
    }

    // Remove an observer
    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    // Notify all observers
    notifyObservers(phoneNumber) {
        for (let observer of this.observers) {
            observer.update(phoneNumber);
        }
    }
}

// Test the implementation

const phone = new Telephone(); // Create telephone object

// Create two observers
const phoneNumberObserver = new PhoneNumberObserver();
const diallingObserver = new DiallingObserver();

// Add observers to the telephone
phone.addObserver(phoneNumberObserver);
phone.addObserver(diallingObserver);

// Add phone numbers
phone.addPhoneNumber("08030909282");
phone.addPhoneNumber("07030808292");

// Dial a phone number
phone.dialPhoneNumber("08030909282");

// Remove a phone number
phone.removePhoneNumber("07030808292");

// Try dialing a removed phone number
phone.dialPhoneNumber("07030808292");
