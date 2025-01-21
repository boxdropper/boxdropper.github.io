var navHomeBtn = document.getElementById('navHomeButton'),
navAboutBtn = document.getElementById('navAboutButton'),
navBlogBtn = document.getElementById('navBlogButton'),
navDownloadsBtn = document.getElementById('navDownloadsButton'),
navOtherBtn = document.getElementById('navOtherButton'),
heartbeat = document.getElementById('k7hover'),
bgmusic = document.getElementById("bgmusic");
console.log(heartbeat);

window.addEventListener("load", function() {
    bgmusic.play();
}, false);

navHomeBtn.addEventListener('mouseover', function() {
    heartbeat.play();
}, false);

navAboutBtn.addEventListener('mouseover', function() {
    heartbeat.play();
}, false);

navBlogBtn.addEventListener('mouseover', function() {
    heartbeat.play();
}, false);

navDownloadsBtn.addEventListener('mouseover', function() {
    heartbeat.play();
}, false);

navOtherBtn.addEventListener('mouseover', function() {
    heartbeat.play();
}, false);
