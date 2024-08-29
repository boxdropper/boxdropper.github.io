/* window.onload = choosePic; */
window.addEventListener("load", chooseAboutPic);

var myPix = new Array("images/stills/miku_high_res.jpg", //high-res hatsune miku
"images/stills/PRB-GTAIV-Battlesuit.webp", //GTA IV Art of Princess Robot Bubblegum - Courtesy of GTA Wiki
"images/stills/PRB-GTAIV-CharacterDecal.webp", //GTA IV Decal of Princess Robot Bubblegum - Courtesy of GTA Wiki
"images/stills/PRB-GTAV-UpdatedBattleSuit.webp", //GTA V Updated Design of Princess Robot Bubblegum - Courtesy of GTA Wiki
"images/stills/PRB-GTAV-ShinyWasabiKitty.webp", //GTA V Shiny Wasabi Kitty - Courtesy of GTA Wiki
);

function chooseAboutPic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("aboutPics").src = myPix[randomNum];}