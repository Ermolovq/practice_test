const music = document.getElementById("song");
const music_icon = document.getElementById("music-icon");
music.volume = 0.2;
music_icon.onclick = function () {
    if (music.paused) {
        music.play();
        music_icon.src = "images/pause.png";
    } else {
        music.pause();
        music_icon.src = "images/play.png";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    music.play();
});