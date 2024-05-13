/* window.onload = choosePhrase; */
window.addEventListener("load", chooseFooterText);

var footerArray = new Array ("SYLENTH loves you!",
"frog blast the vent core!",
"now available on dreamcast!",
"mikudayo!",
"master, we're in a tight spot!",
"ah, gordon freeman!",
"play shogo!",
"they're everywhere!",
"you're toast!",
"when it's done!",
"can run crysis!",
"buttsauce!",
"peggle 2!",
"you're winner!",
"cabbage!",
"wasted!",
"maniac mode!",
"play chaser!",
"boop!",
"seven!",
"it's a manhunt!",
"with flowers!",
"deploying tazer!",
"play half-life!",
);

function chooseFooterText() {
    var randomNum = Math.floor(Math.random() * footerArray.length);
    document.getElementById("randomFooterText").innerHTML = footerArray[randomNum];}

