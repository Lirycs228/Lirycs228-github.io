
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
      //alert("text");
        d = xhr.responseText;
    } else if (xhr.responseType === "document") {
      //alert("document");
        d = xhr.responseXML;
    } else {
      //alert("else");
        d = xhr.response;
    }
    return d;
}

//make request which executes code inside of it after
req = new XMLHttpRequest();
req.onreadystatechange = function() {
  //alert("Loading" + req.readyState);
  if (req.readyState == 4) {
    //adjust zoom to 125%
    var browserZoomLevel = Math.round(window.devicePixelRatio * 100);
    //alert(browserZoomLevel);
    var body = document.getElementById("body")
    if(browserZoomLevel==25) {
      body.style.zoom = 5;
      body.style["-moz-transform"] = "scale(5)";
      body.style["-moz-transform-origin"] = "0 0";
    } else if(browserZoomLevel==50) {
      body.style.zoom = 2.5;
      body.style["-moz-transform"] = "scale(2.5)";
      body.style["-moz-transform-origin"] = "0 0";
    } else if(browserZoomLevel==75) {
      body.style.zoom = 1.8;
      body.style["-moz-transform"] = "scale(1.8)";
      body.style["-moz-transform-origin"] = "0 0";
    } else if(browserZoomLevel==100) {
      body.style.zoom = 1.25;
      body.style["-moz-transform"] = "scale(1.25)";
      body.style["-moz-transform-origin"] = "0 0";
    }


    data = readBody(req);
    //alert(data);            full document
    data = data.split("\n");
    var current;
    //alert(data.length)
    //for(line in data) {     to give out the document lines
    //  current = data[line].split(";");
    //  current = current[0];
    //  //alert(data[line]);  line
    //  //alert(current);     first entry per line
    //};
    //normal JS after XMLHttpRequest:
    var cheat = document.getElementById("cheat").addEventListener("click", function() {valid_psw()})

    //make exp text change
    var tab = document.getElementById("tabcontainercontent")
    tab.innerHTML = "Erklärung"
    var t = document.getElementById("tab1");
    var tt = document.getElementById("tab2");
    var cname;
    t.addEventListener("click", function(){
      cname = tt.className;
      //alert(cname);
      cname = cname.split(" ");
      //alert(cname.length);
      if(cname.length >= 2) {
        tt.className = tt.className.replace( /(?:^|\s)activetab(?!\S)/g , '' );
        t.className += " activetab";
        tab.innerHTML = "Erklärung"
      }
    })
    tt.addEventListener("click", function(){
      cname = t.className;
      //alert(cname);
      cname = cname.split(" ");
      //alert(cname.length);
      if(cname.length >= 2) {
        t.className = t.className.replace( /(?:^|\s)activetab(?!\S)/g , '' );
        tt.className += " activetab";
        tab.innerHTML = "FAQ"
      }
    })

    var log = document.getElementById("log").addEventListener("click", function () {
      //copare with server
      var child = document.getElementById("child").value;
      var family = document.getElementById("family").value;
      var clas = document.getElementById("clas").value;
      var number = document.getElementById("number").value;
      var mail = document.getElementById("mail").value;
      //alert(child);

      //to hash
      var achild = hash(child);
      var afamily = hash(family);
      var aclas = hash(clas);
      var anumber = hash(number);
      var amail = hash(mail);
      //alert(achild);

      var obj;
      var valid = false;
      var inline;
      for(line in data) {
        obj = data[line].split(";");
        if((((obj[0]==achild) && (obj[1]==afamily)) && ((obj[2]==aclas) && (obj[3]==anumber))) && (obj[4]==amail)) {
          valid = true;
          inline = line;
          alert("valid")
          valid_psw();
          break;
        };
      };
      if(valid!=true) {
        alert("not_valid")
        not_valid();
      }
      //end of comparing
    });


    //End of normal JS
  }
};
req.open("GET", fileName, true);
req.send();

function valid_psw() {
  login_away();
  //sleep
  exp_get();
}
function not_valid() {
  var nvalid = document.getElementsByClassName("avalid");
  for(var i = 0;i < nvalid.length; i++) {
    nvalid[i].style.color = "red";
  }
  var loga = document.getElementById("log");
  loga.value = "Nochmal";
}
