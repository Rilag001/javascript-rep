// Array


// Medtod 1
var weekdays = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"];

//Hämta ut array
console.log("Första veckodagen " + weekdays[0]);

var favoritDay = weekdays[4];

// Medtod 2
var months = [];
months[0] = "Januari";
months[1] = "Februari";
months[2] = "Mars";
months[3] = "April";
months[4] = "Maj";
months[5] = "Juni";
months[6] = "Juli";
months[7] = "Augusti";
months[8] = "September";
months[9] = "Oktober";
months[10] = "November";
months[11] = "December";

console.log("Året har " + month.length + " månader.");

months.push("Narniaari");



// Objekt, en sak med egenskaper

// Exempel 1
var car = {color: "ful", hasAWheel: true, numberOfSeats: 4};
// Ett object består av egenskaper, varje egenskap består av attribut (key) och ett värde (value)

// Exempel 2
var student = {};
student.name = "Anton";
student.favoriteTeam = "AIK";

// Exempel 3
var annotherStudent = new Object();
annotherStudent["name"] = "Oskar";

// Hur hämtar vi något från ett objekt?
console.log("Den första studenten heter " + student.name); // Punktnotation (dot syntax)
console.log("Den andra studenten heter " + annotherStudent["name"];
            
       
// Objekt i Arrayer
var students = [student, anotherStudent];
console.log("Första studenten i array är " + students[0].name);
console.log("Den andra studenten i array är " + students[1]["name"]);

// array i array
var favoriteGames[["Super Mario Bros 1", "Duck Hunt"], ["Wii Sports", "Zelda"]];
console.log("Andra spelet i andra listan " + favoriteGames[0][1]);

// array i objekt
var superMario64 = {title: Super Mario, countries: ["Sweden", "USA"], characters ["Mario", "Toad"]};
consolelog("Första karaktären är " + superMario64.characters[0];)
consolelog("Andra landet är " + superMario64.["countries"][1];)

var soccerPlayer = {name: "Zlatan", originalClub: {name: "Malmö FF", playedInChampionsLeague: true, founded: 1901}};
console.log("Zlatans orginalklubb startades " + soccerPlayer.originalClub.founded);
console.log("Zlatans orginalklubb heter " + soccerPlayer["originalClub"]["name"]);






