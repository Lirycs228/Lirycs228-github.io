var folders = {"Oranien-Plan":"lirycs228.github.io/plan/plan.htm"};
//,"Wahlzettel"  :"lirycs228.github.io/wahl/wahl.htm"

var keys = Object.keys(folders);
var current;
var element;

function make_log() {
  for (i = 0; i < keys.length; i++) {
    element = document.getElementById("vesel");
    current = folders[keys[i]];
    element.innerHTML = element.innerHTML + "<a href='" + current + "'><div class='main'><div class='header'>" + keys[i] + "</div><div class='body'>" + current + "</div></div></a>";
  }
}
