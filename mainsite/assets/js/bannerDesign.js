/* window.onload = choosePic; */
window.addEventListener("load", choosePic);

var logoImages = new Array("assets/images/homeBanner/logos/SYLENTH.webp",
"assets/images/homeBanner/logos/crueltysquad.webp",
"assets/images/homeBanner/logos/dreamcast.webp",
"assets/images/homeBanner/logos/GTA2.webp",
"assets/images/homeBanner/logos/kanelynch2.webp",
"assets/images/homeBanner/logos/killer7.webp",
"assets/images/homeBanner/logos/manhunt.webp",
"assets/images/homeBanner/logos/maxpayne.webp",
"assets/images/homeBanner/logos/miku.webp",
"assets/images/homeBanner/logos/neotokyo.webp",
"assets/images/homeBanner/logos/pdzero.webp",
"assets/images/homeBanner/logos/source.webp",
"assets/images/homeBanner/logos/marathon.webp",
"assets/images/homeBanner/logos/shogo.webp",
"assets/images/homeBanner/logos/persona3.webp",
"assets/images/homeBanner/logos/raidou.webp",
"assets/images/homeBanner/logos/raidouRemaster.webp",
);

var bgImages = new Array("assets/images/homeBanner/backgrounds/SYLENTH.webp",
    "assets/images/homeBanner/backgrounds/crueltysquad.gif",
    "assets/images/homeBanner/backgrounds/dreamcast.webp",
    "assets/images/homeBanner/backgrounds/GTA2.webp",
    "assets/images/homeBanner/backgrounds/kanelynch2.webp",
    "assets/images/homeBanner/backgrounds/killer7.webp",
    "assets/images/homeBanner/backgrounds/manhunt.gif",
    "assets/images/homeBanner/backgrounds/maxpayne.gif",
    "assets/images/homeBanner/backgrounds/miku.webp",
    "assets/images/homeBanner/backgrounds/neotokyo.webp",
    "assets/images/homeBanner/backgrounds/pdzero.webp",
    "assets/images/homeBanner/backgrounds/source.webp",
    "assets/images/homeBanner/backgrounds/marathon.webp",
    "assets/images/homeBanner/backgrounds/shogo.webp",
    "assets/images/homeBanner/backgrounds/persona3.webp",
    "assets/images/homeBanner/backgrounds/raidou.webp",
    "assets/images/homeBanner/backgrounds/raidouRemaster.webp",
    );

function choosePic() {
     var randomNum = Math.floor(Math.random() * logoImages.length);
     document.getElementById("sylenthLogos").src = logoImages[randomNum];
     document.getElementById("headerBG").src = bgImages[randomNum];}