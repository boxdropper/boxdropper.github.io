var navHomeBtn = document.getElementById('navHomeButton'),
navAboutBtn = document.getElementById('navAboutButton'),
navBlogBtn = document.getElementById('navBlogButton'),
navDownloadsBtn = document.getElementById('navDownloadsButton'),
navOtherBtn = document.getElementById('navOtherButton'),
heartbeat = document.getElementById('k7hover'),
audios = document.querySelectorAll('audio');
console.log(audios);


navHomeBtn.addEventListener('mouseover', function() {
[].forEach.call(audios, function(audio) {
  // do whatever
  audio.play();
});
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
