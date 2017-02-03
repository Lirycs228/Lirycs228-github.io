var msgs = [];

var config = {
  apiKey: "AIzaSyATwnVL6P_HgJl1Ry68RasnGCmR5CiOBPo",
  authDomain: "oranien-plan.firebaseapp.com",
  databaseURL: "https://oranien-plan.firebaseio.com",
  storageBucket: "oranien-plan.appspot.com",
  messagingSenderId: "90152525796"
};
firebase.initializeApp(config);

var database = firebase.database();
var ref_zero = firebase.database().ref("chat/msg/0");

function display_new_msg() {
  for (var i = 0; i < msgs.length; i++) {
    document.getElementById("msg_box").innerHTML = document.getElementById("msg_box").innerHTML + "<div id='msg'><div id='msg_header'>" + msgs[i]["head"] + "</div><div id='msg_body'>" + msgs[i]["body"] + "</div></div>";
  };
};

function load_msg(index) {
  for (var i = 1; i <= index; i++) {
    var head = firebase.database().ref("chat/msg/" + i + "/head");
    var body = firebase.database().ref("chat/msg/" + i + "/body");
    head.once("value", function(snapshot) {
      head = snapshot.val();
    }), then(
      body.once("value", function(snapshot) {
        body = snapshot.val();
      }), then(
        msgs.push({"head":head, "body":body});
        display_new_msg();
      );
    );
  };
};

function save_msg(msg, name) {
  var long = firebase.database().ref("chat/msg/0");
  long.once("value", function(snapshot) {
    long = snapshot.val();
  }, function (err) {
    alert("ERROR: " + err);
  });
  alert(long);
  firebase.database().ref("chat/msg/0").set(long + 1);
  firebase.database().ref("chat/msg/" + (long + 1) + "/head").set(name);
  firebase.database().ref("chat/msg/" + (long + 1) + "/body").set(msg);
};
function adder() {
  document.getElementById("send").addEventListener("click", function() {
    save_msg(document.getElementById("msg").value, document.getElementById("name").value);
    document.getElementById("msg").value = "";  document.getElementById("name").value = "";
  });
};


ref_zero.on("value", function(snapshot) {

});
