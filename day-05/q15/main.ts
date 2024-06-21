let guestNames: string[] = ["Kehan", "Ali", "Mehdi", "abbas"];
let unableToAttend: string = "Ali"
console.log(`${unableToAttend} can't make it to dinner.`);
let newGuest = "Awj";
guestNames[guestNames.indexOf(unableToAttend)] = newGuest;
guestNames.forEach((guest) => {
    console.log(`Hey ${guest}, would you like to come over for dinner this weekend?`);
})