var folders = {"Oranien-Plan":"/plan/plan.htm",
               "Wahlzettel"  :"/wahl/wahl.htm",
               "Game"        :"/game/game.htm"};

var keys = Object.keys(folders);
var current;
var element;

function make_log() {
  for (i = 0; i < keys.length; i++) {
    element = document.getElementById("vesel");
    current = folders[keys[i]];
    if(keys[i]=="Game") {
      element.innerHTML = element.innerHTML + "<a href='" + current + "'><div class='main'><div class='header'>" + keys[i] + "</div><div class='body'>" + current + "</div><div class='out'>Coming soon</div></div></a>";
    } else {
      element.innerHTML = element.innerHTML + "<a href='" + current + "'><div class='main'><div class='header'>" + keys[i] + "</div><div class='body'>" + current + "</div></div></a>";
    }
  }
}
