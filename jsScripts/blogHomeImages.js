/* window.onload = choosePic; */
window.addEventListener("load", chooseBlogPic);

var myPix = new Array("../images/blogHome/ronPaulAnime.jpg", //Ron Paul will make Anime real
"../images/blogHome/another_20_to_knockout.png", //Another 20 Trillion to knockout.chat
"../images/blogHome/beavisbutthead_bootleg.jpg", //Bootleg Beavis and Butthead Cartridge
"../images/blogHome/limited_time_only.jpg", //limited time only!
"../images/blogHome/a_chan_kaboom.jpg", //A-Chan Mind Blown
"../images/blogHome/func_detail.png", //func_detail
"../images/blogHome/jbep3_pizza.png", //Postal Pizza
"../images/blogHome/that_cat.jpg", //that cat
"../images/blogHome/neon_penisis_erection.png", //neon penisis erection
"../images/blogHome/dr_pepper_cat.jpg", //cat with dr. pepper on it's head
"../images/blogHome/isopod_mcnuggets.jpg", //isopod
"../images/blogHome/maxwell_irl.jpg", //maxwell
"../images/blogHome/tryce_degenerate.png", //tryce calling you a degenerate
"../images/blogHome/tryce_degenerate.png", //tryce saying no
"../images/blogHome/bibleBlack_psp.png", //"Statistically speaking, there's someone out there who owns Bible Black on PSP & nothing else."
"../images/blogHome/fish_building.jpg", //"Uh big fish"
"../images/blogHome/peepaw_hangout.jpg", //gundam
"../images/blogHome/askjapan_sailormoon.jpg", //"I'm 50 years old Japanese man. I am lonely on Saturday night. I play Salor Moon SNES..."
"../images/blogHome/halo2_macdonalds.png", //macdonald
"../images/blogHome/electricity_explained.jpg", //pay attention now!
"../images/blogHome/tiger_wood_gamble.jpg", //THE GRIND NEVER STOPS
"../images/blogHome/low_poly_papa_johns_garlic.jpg", //"hi here's a relatively low-poly 3d model of papa john's garlic sauce dippers"
"../images/blogHome/korn_haze.jpg", //"Gaming for me is a religion, and Haze is the shit!"
"../images/blogHome/psp2.jpg", //"and last but not least psp 2"
"../images/blogHome/cat_panasonic.jpg", //cat panasonic
"../images/blogHome/well_dressed-ps2.jpg", //"Depressed, well-dressed, and PS2 obsessed."
"../images/blogHome/doug_walker_superbowl.jpg", //raw
);

function chooseBlogPic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("blogHomePhoto").src = myPix[randomNum];}