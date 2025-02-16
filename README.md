# ARINZE-NWOBA-TELEPHONE-PACKAGE
This is a basic implementation of a telephone system using the Observer design pattern. 
The Telephone class manages phone numbers and allows you to add, remove, and dial them. 
It also supports observers that are notified whenever a phone number is dialed.

The system includes two observers:

PhoneNumberObserver: Prints the phone number being dialed.

DiallingObserver: Prints "Now Dialling" when a phone number is dialed.

Features

Add Phone Number: Add a new phone number to the system.

Remove Phone Number: Remove an existing phone number.

Dial Phone Number: Dial a phone number if it exists, notifying observers.

Observers: The system notifies all registered observers when a phone number is dialed.
