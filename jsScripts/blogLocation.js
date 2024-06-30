/* window.onload = chooseLocation; */
window.addEventListener("load", chooseLocation);

var locationArray = new Array ("Daytona International Speedway.",
"Blood Gulch.",
"his house.",
"Jabroni Brawl: Episode 3!",
"the UESC Marathon.",
"america ya!",
"the Houshou no Ichimi. ahoy!",
"jail.",
"your bathroom.",
"the 2nd floor of an IKEA.",
"the Steam client.",
"the SEGA Dreamcast.",
"the SEGA Saturn.",
"a Hatsune Miku concert.",
"the heavens.",
"an abandoned Discord server.",
"pain.",
"the source engine.",
"chinatown.",
"Mother Base.",
"the united kingdom.",
"blender.",
"the Unreal Engine.",
"the fart zone.",
"pizza.",
"a vtuber merch store.",
"carcer city.",
"courtroom no. 4.",
"an hmv.",
"the dungeon.",
"the employ of the united states government.",
"knockout.chat",
"Allan please add a location.",
"paradise, az.",
"the club. straight up jorkin' it.",
"neon genesis evangelion.",
);

function chooseLocation() {
    var randomNum = Math.floor(Math.random() * locationArray.length);
    document.getElementById("locationOptions").innerHTML = locationArray[randomNum];}

