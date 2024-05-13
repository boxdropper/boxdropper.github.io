/* window.onload = choosePic; */
window.addEventListener("load", choosePic);

var myPix = new Array("images/logos/sylenth/Primary_black.svg", //Main Black SYLENTH logo/typeface
"images/logos/sylenth/Primary_white.svg", //Main White SYLENTH logo/typeface
"images/logos/sylenth/sourceEngine_sylenth.svg", //Source Engine Logo
"images/logos/sylenth/ntGhost_Sylenth.svg", //NeoTokyo Source Inspired Logo
"images/logos/sylenth/manhunt_sylenth.svg", //Manhunt Logo
"images/logos/sylenth/gta2_sylenth_black.svg", //GTA 2 Black Logo
"images/logos/sylenth/gta2_sylenth_white.svg", //GTA 2 White Logo
"images/logos/sylenth/max_sylenth.svg", //Max Payne Logo
"images/logos/sylenth/perfect_sylenth_1.svg", //Perfect Dark Logo
"images/logos/sylenth/perfect_sylenth_zero_1.svg", //Perfect Dark Zero Logo
"images/logos/sylenth/y2k_sylenth_black.svg", //Y2K Styled Black Logo
"images/logos/sylenth/y2k_sylenth_white.svg", //Y2K Styled White Logo
"images/logos/sylenth/unreal_sylenth_black.svg", //Unreal Engine Styled Black Logo
"images/logos/sylenth/unreal_sylenth_white.svg", //Unreal Engine Styled White Logo
"images/logos/sylenth/cruelty_sylenth.svg", //Cruelty Squad Styled Logo
"images/logos/sylenth/k7_sylenth.svg", //killer7 Styled Logo
"images/logos/sylenth/KaL2_sylenth.svg", //Kane & Lynch 2 Styled Logo
"images/logos/sylenth/dreamcast_sylenth.svg", //Sega Dreamcast Styled Logo
);

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("sylenthLogos").src = myPix[randomNum];}