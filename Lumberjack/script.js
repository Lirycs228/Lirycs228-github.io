//FullPageJsActivated

$(document).ready(function() {
  $('#wrapper').fullpage();
});

function frosting() {
  particlesJS.load('particles-js', 'assets/particles/app.json', function() {
    console.log('callback - particles.js config loaded');
  });
}

function httpGetAsync(theUrl, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      callback(xmlHttp.responseText);
  }
  xmlHttp.open("GET", theUrl, true); // true for asynchronous
  xmlHttp.send(null);
}
function add_shop_item_muetze(text) {
  var line_list = text.split("\n");
  line_list.strip();
  var name, prize, avail, img = line_list.split(";");
  element.innerHTML = element.innerHTML + "<div><div class='shop_item_muetze'><div class='shop_item_muetze_img'><img src='" + img + "' /></div><div class='shop_item_muetze_header'>" + name + "</div><div class='shop_item_muetze_body'>" + prize + "</div><div class='shop_item_muetze_availability'>" + avail + " AUF LAGER</div></div></div>";
}

window.onload = frosting();
window.onload = httpGetAsync("products/muetzen.txt", add_shop_item_muetze);
