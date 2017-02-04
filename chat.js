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

function set_html(id, set) {
  document.getElementById(id).innerHTML = set;
};

function call_change(id, func, color) {
  document.getElementById(id).addEventListener(func, function () {  document.getElementById(id).style.backgroundColor=color;  });
};

function secure() {
  var email = "";  var psw = "";  window.err = false;
  set_html("e_pompt", "<div style='background-color:#444; z-index:3; width:180px; height:400px; position:absolute; top:20%; left:45%; color:#AAA;'> <button type='button' id='end' style='background-color:#FF0000; border:none; width:25px; height:20px;'>X</button> <center><br> E-Mail: <br> <input type='email' id='email' /> <br><br><br> Password: <br> <input type='password' id='psw' /><br><br><br> <button type='button'  id='login' style='border:none; background-color:#00FF00; width:100px; height:50px; font-size: 20px;'>Login</button> </center></div>");
  call_change("end", "mouseover", "#AA0000");
  call_change("end", "mouseout", "#FF0000");
  call_change("login", "mouseover", "#00AA00");
  call_change("login", "mouseout", "#00FF00");
  document.getElementById("end").addEventListener("click", function () {  set_html("e_pompt", "");  window.location.replace('https://lirycs228.github.io');  });
  document.getElementById("login").addEventListener("click", function () {
    email = document.getElementById("email").value; psw = document.getElementById("psw").value;
    firebase.auth().signInWithEmailAndPassword(email, psw).catch(function(error) {
      window.err = true;  var errorCode = error.code;  var errorMessage = error.message;  alert(errorCode + "\n" + errorMessage);  window.location.replace('https://lirycs228.github.io');
    });
    set_html("black", "");
    set_html("e_pompt", "");
  });
};

function display_new_msg() {
  document.getElementById("msg_box").innerHTML = "";
  for (var i = 0; i < msgs.length; i++) {
    document.getElementById("msg_box").innerHTML =  "<div id='msg'><div id='msg_header'>" + msgs[i]["head"] + "</div><div id='msg_body'>" + msgs[i]["body"] + "</div></div>" + document.getElementById("msg_box").innerHTML;
  };
};

function load_msg(index) {
  msgs = [];
  for (var i = 1; i <= index; i++) {
    var top = firebase.database().ref("chat/msg/" + i + "/head");
    var mid = firebase.database().ref("chat/msg/" + i + "/body");
    top.once("value", function(snapshot) {  top = snapshot.val();   }).then(
      mid.once("value", function(snapshot) {  mid = snapshot.val();
        msgs.push({head:top, body:mid});
        display_new_msg();
      }));
  };
};

function save_msg(msg, name) {
  window.err_s = false;
  var long = firebase.database().ref("chat/msg/0");
  long.once("value", function(snapshot) {
    long = snapshot.val();
  }, function (err) {
    alert("ERROR: " + err);
    window.err_s = true;
  });
  if(window.err_s == false) {
    firebase.database().ref("chat/msg/" + (long + 1) + "/head").set(name).then(
      firebase.database().ref("chat/msg/" + (long + 1) + "/body").set(msg).then(
        ref_zero.set(long + 1);
      );
    );
  };
};

function adder() {
  document.getElementById("send").addEventListener("click", function() {
    save_msg(document.getElementById("msg").value, document.getElementById("name").value);
    document.getElementById("msg").value = "";  document.getElementById("name").value = "";
  });
};

ref_zero.on("value", function(snapshot) {
  load_msg(snapshot.val());
});
