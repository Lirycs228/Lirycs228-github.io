var temp;
//make layer "hide" behind background
function blur_away() {//beginning: there
  temp = document.getElementById("blur").style.zIndex = "-2";
};
function exp_away() {//beginning: away
  temp = document.getElementById("exp").style.zIndex = "-3";
};
function check_away() {//beginning: away
  temp = document.getElementById("check").style.zIndex = "-4";
};
function login_away() {//beginning: there
  temp = document.getElementById("login").style.zIndex = "-5";
};

//make layer "appear" at destined z-index
function blur_get() {
  temp = document.getElementById("blur").style.zIndex = "2";
};
function exp_get() {
  temp = document.getElementById("exp").style.zIndex = "3";
};
function check_get() {
  temp = document.getElementById("check").style.zIndex = "4";
};
function login_get() {
  temp = document.getElementById("login").style.zIndex = "5";
};

//hash a string to compare to database
function hash(str) {
  var i, l,
      hval = 0x811c9dc5;

  for (i = 0, l = str.length; i < l; i++) {
      hval ^= str.charCodeAt(i);
      hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
  }
  return hval >>> 0;
}


var fileName = "test.txt";
var data = "";

//get type of file to call
function readBody(xhr) {
    var d;
    if (!xhr.responseType || xhr.responseType === "text") {
      alert("text");
        d = xhr.responseText;
    } else if (xhr.responseType === "document") {
      alert("document");
        d = xhr.responseXML;
    } else {
      alert("else");
        d = xhr.response;
    }
    return d;
}

//make request which executes code inside of it after
req = new XMLHttpRequest();
req.onreadystatechange = function() {
  alert("Loading" + req.readyState);
  if (req.readyState == 4) {
    data = readBody(req);
    alert(data);
    data = data.split("\n");
    var current;
    for(line in data) {
      current = data[line].split(";");
      current = current[0];
      alert(data[line]);
      alert(current);
    };
    //normal JS after XMLHttpRequest:

    var log = document.getElementById("log").addEventListener("click", function () {
      alert("click")
      //copare with server
      var child = document.getElementById("child").value;
      var family = document.getElementById("family").value;
      var clas = document.getElementById("clas").value;
      var number = document.getElementById("number").value;
      var mail = document.getElementById("mail").value;
      alert(child);
      //to hash
      var achild = hash(child);
      var afamily = hash(family);
      var aclas = hash(clas);
      var anumber = hash(number);
      var amail = hash(mail);

      alert(achild);

      var obj;
      var valid = false;
      var inline;
      for(line in data) {
        obj = data[line].split(";");
        if((((obj[0]==achild) && (obj[1]==afamily)) && ((obj[2]==aclas) && (obj[3]==anumber))) && (obj[4]==amail)) {
          valid = true;
          inline = line;
          alert("valid")
          break;
          valid_psw(child, family, clas, number, mail);
        };
      };
      alert("not_valid")
      not_valid();
      //end of comparing
    });

    //End of normal JS
  }
};
req.open("GET", fileName, true);
req.send();

function valid_psw(c, f, cl, n, m) {
  login_away();
  //sleep
  exp_get();
}
function not_valid() {

}
