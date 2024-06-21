var guestNames = ["Kehan", "Ali", "Mehdi", "abbas"];
var unableToAttend = "Ali";
console.log("".concat(unableToAttend, " can't make it to dinner."));
var newGuest = "Awj";
guestNames[guestNames.indexOf(unableToAttend)] = newGuest;
guestNames.forEach(function (guest) {
    console.log("Hey ".concat(guest, ", would you like to come over for dinner this weekend?"));
});
