// Oranien-Plan Javascript Code by Sven Nachtigal && Erik Hammon
var date = new Date();
var day = date.getDate();
var month = date.getMonth();
var week_day = date.getDay();
var monthNames = ["JAN", "FEB", "MÄR", "APR", "MAI", "JUN",
  "JUL", "AUG", "SEP", "OKT", "NOV", "DEZ"];

function update_date(){
  document.getElementById('menue_date').innerHTML = day + ". "  + monthNames[month];
  update_day();
};


function update_day(){
  if(week_day == 1){
      document.getElementById('Tag_0').innerHTML = "HEUTE";
      document.getElementById('Tag_1').innerHTML = "DI";
      document.getElementById('Tag_2').innerHTML = "MI";
      document.getElementById('Tag_3').innerHTML = "DO";
      document.getElementById('Tag_4').innerHTML = "FR";
    }
  else if(week_day == 2){
       document.getElementById('Tag_0').innerHTML = "HEUTE";
       document.getElementById('Tag_1').innerHTML = "MI";
       document.getElementById('Tag_2').innerHTML = "DO";
       document.getElementById('Tag_3').innerHTML = "FR";
       document.getElementById('Tag_4').innerHTML = "MO";
     }
  else if (week_day == 3) {
       document.getElementById('Tag_0').innerHTML = "HEUTE";
       document.getElementById('Tag_1').innerHTML = "DO";
       document.getElementById('Tag_2').innerHTML = "FR";
       document.getElementById('Tag_3').innerHTML = "MO";
       document.getElementById('Tag_4').innerHTML = "DI";
       }
  else if (week_day == 4) {
        document.getElementById('Tag_0').innerHTML = "HEUTE";
        document.getElementById('Tag_1').innerHTML = "FR";
        document.getElementById('Tag_2').innerHTML = "MO";
        document.getElementById('Tag_3').innerHTML = "DI";
        document.getElementById('Tag_4').innerHTML = "MI";
          }
    else if (week_day == 5){
        document.getElementById('Tag_0').innerHTML = "HEUTE";
        document.getElementById('Tag_1').innerHTML = "MO";
        document.getElementById('Tag_2').innerHTML = "DI";
        document.getElementById('Tag_3').innerHTML = "MI";
        document.getElementById('Tag_4').innerHTML = "DO";
      }
    else{
      document.getElementById('Tag_0').innerHTML = "MO";
      document.getElementById('Tag_1').innerHTML = "DI";
      document.getElementById('Tag_2').innerHTML = "MI";
      document.getElementById('Tag_3').innerHTML = "DO";
      document.getElementById('Tag_4').innerHTML = "FR";
    };
};
//                   !Hier beginnt die Tabelle!

//From here on this is JS that you should not change
// Initialize Firebase
var config = {
  apiKey: "AIzaSyATwnVL6P_HgJl1Ry68RasnGCmR5CiOBPo",
  authDomain: "oranien-plan.firebaseapp.com",
  databaseURL: "https://oranien-plan.firebaseio.com",
  storageBucket: "oranien-plan.appspot.com",
  messagingSenderId: "90152525796"
};
firebase.initializeApp(config);
alert("config done");
var storage = firebase.storage();

var storageRef = firebase.storage().ref();


  function makeTextFile (text) {
    var data = new Blob([text], {type: 'text/plain'});
    alert("text file made");
    return data;
  };


  function upload_file(str, nbr){
    var planRef = storageRef.child('plan' + nbr.toString() + '.txt');
    var file = makeTextFile(str);
    planRef.put(file).then(function(snapshot) {
      alert('Uploaded a blob or file!');
    });
  };

  function download_file (nbr) {
    var planRef = storageRef.child('plan' + nbr.toString() + '.txt');
    planRef.getDownloadURL().then(function(url) {

      // This can be downloaded directly:
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function(event) {
        var blob = xhr.response;
      };

      xhr.open('GET', url);
      xhr.send();
      alert("xhr");
    })
  };



var Tag_0 = [];    var Tag_1 = [];    var Tag_2 = [];    var Tag_3 = [];    var Tag_4 = [];   var day_at_moment = [];
//variales to save all days

var Suche = [];
//variable to highlight the searched klasses


function write(liste) {
  document.getElementById("whitespace").innerHTML = "<table border='1px solid black' id='table_main'> <tr><th width='100' class='table_th'> Klasse: </th><th width='100' class='table_th'> Stunde: </th><th width='100' class='table_th'> Lehrkr&auml;fte: </th><th width='300' class='table_th'> Anmerkungen: </th></tr>";
  for (var i = 0; i < liste.length; i++) {
    if (liste[i][0] != "Q1-2" && liste[i][0] != "Q3-4") {
      var test = liste[i][0].split("");
    } else {
      var test = liste[i][0];
    };
    var done = false;  var donee = false;
    for (var o = 0; o < test.length; o++) {
      if (Suche[0] == test[o] || Suche[0] == test) {
        if (Suche[0] == test) {
          done = true; donee = true;
          document.getElementById("whitespace").innerHTML = document.getElementById("whitespace").innerHTML.replace("</tbody></table>", "<tr> <td class='table_td' style='background-color:#FF8000; color:black;'> " + liste[i][0] +" </td><td class='table_td' style='background-color:#FF8000; color:black;'> " + liste[i][1] + " </td><td class='table_td' style='background-color:#FF8000; color:black;'> " + liste[i][2] + " </td><td class='table_td' style='background-color:#FF8000; color:black;'> " + liste[i][3] + " </td> </tr>" + "</tbody></table>");  break
        };
        if (Suche.length == 2) {
          for (var g = 0; g < test.length; g++) {
            if (Suche[1] == test[g]) {
              done = true;  donee = true;
              document.getElementById("whitespace").innerHTML = document.getElementById("whitespace").innerHTML.replace("</tbody></table>", "<tr> <td class='table_td' style='background-color:#FF8000; color:black;'> " + liste[i][0] +" </td><td class='table_td' style='background-color:#FF8000; color:black;'> " + liste[i][1] + " </td><td class='table_td' style='background-color:#FF8000; color:black;'> " + liste[i][2] + " </td><td class='table_td' style='background-color:#FF8000; color:black;'> " + liste[i][3] + " </td> </tr>" + "</tbody></table>");  break
            };
          };
          if (donee == false) {
            document.getElementById("whitespace").innerHTML = document.getElementById("whitespace").innerHTML.replace("</tbody></table>", "<tr> <td class='table_td'> " + liste[i][0] +" </td><td class='table_td'> " + liste[i][1] + " </td><td class='table_td'> " + liste[i][2] + " </td><td class='table_td'> " + liste[i][3] + " </td> </tr>" + "</tbody></table>");  break
          };
        } else {
          done = true;
          document.getElementById("whitespace").innerHTML = document.getElementById("whitespace").innerHTML.replace("</tbody></table>", "<tr> <td class='table_td' style='background-color:#FF8000; color:black;'> " + liste[i][0] +" </td><td class='table_td' style='background-color:#FF8000; color:black;'> " + liste[i][1] + " </td><td class='table_td' style='background-color:#FF8000; color:black;'> " + liste[i][2] + " </td><td class='table_td' style='background-color:#FF8000; color:black;'> " + liste[i][3] + " </td> </tr>" + "</tbody></table>");  break
        };
      } else {
        if (done != true && donee != true) {
          done = true;
          document.getElementById("whitespace").innerHTML = document.getElementById("whitespace").innerHTML.replace("</tbody></table>", "<tr> <td class='table_td'> " + liste[i][0] +" </td><td class='table_td'> " + liste[i][1] + " </td><td class='table_td'> " + liste[i][2] + " </td><td class='table_td'> " + liste[i][3] + " </td> </tr>" + "</tbody></table>");  break
        };
      };
    };
  };
};
// function that writes the days on screen

function change(color, id) {
  var color = "#" + color.toString();  document.getElementById(id.toString()).style.backgroundColor=color;  };

function ask() {
  var Klasse = "";  var Stunde = "";  var Lehrer = "";  var bemerk = "";
  document.getElementById("e_pompt").innerHTML = "<div style='background-color:#444; z-index:3; width:180px; height:400px; position:absolute; top:20%; left:45%; color:#AAA;'> <button type='button' id='close' style='background-color:#FF0000; border:none; width:25px; height:20px;'>X</button> <center><br> Klassen: <br> <input type='text' id='klassen' /><br><br><br> Stunde: <br> <input type='text' id='stunde' />  <br><br><br> Lehrkr&auml;fte: <br> <input type='text' id='lehrer' /><br><br><br> Anmerkungen: <br> <input type='text' id='bemerk' /><br><br><br> <button type='button'  id='weiter' style='border:none; background-color:#00FF00; width:100px; height:50px; font-size: 20px;'>Weiter</button> </center></div>";
  document.getElementById("close").addEventListener("mouseover", function () {  change("AA0000", "close");  });
  document.getElementById("close").addEventListener("mouseout", function () {  change("FF0000", "close");  });
  document.getElementById("weiter").addEventListener("mouseover", function () {  change("00AA00", "weiter");  });
  document.getElementById("weiter").addEventListener("mouseout", function () {  change("00FF00", "weiter");  });
  document.getElementById("close").addEventListener("click", function () {
    Klasse = document.getElementById("klassen").value;  Stunde = document.getElementById("stunde").value;  Lehrer = document.getElementById("lehrer").value;  bemerk = document.getElementById("bemerk").value;
    document.getElementById("e_pompt").innerHTML = "";
    Tag_4.push([Klasse, Stunde, Lehrer, bemerk]);  day_at_moment = Tag_4;  write(Tag_4);
  });
  document.getElementById("weiter").addEventListener("click", function () {
    Klasse = document.getElementById("klassen").value;  Stunde = document.getElementById("stunde").value;  Lehrer = document.getElementById("lehrer").value;  bemerk = document.getElementById("bemerk").value;
    Tag_4.push([Klasse, Stunde, Lehrer, bemerk]);
    document.getElementById("klassen").value = "";  document.getElementById("stunde").value = "";  document.getElementById("lehrer").value = "";  document.getElementById("bemerk").value = "";  ask();
  });
};
// function that ask you for params of new day

function next_day() {
  document.getElementById("whitespace").innerHTML = "";
  Tag_0 = Tag_1;  Tag_1 = Tag_2;  Tag_2 = Tag_3;  Tag_3 = Tag_4;  Tag_4 = [];  ask();
 };
//function that inserts the next day and deletes today


function help_first(num, char) {
  var buchs = num.split("");
  if (1 in buchs) {
    document.getElementById(num).addEventListener("click", function(){  Suche = [];  Suche.push(char);
      document.getElementById("searcher").innerHTML = Suche;  write(day_at_moment);  });
  } else {
    document.getElementById(num + char).addEventListener("click", function(){  Suche = [];  Suche.push(num, char);
      document.getElementById("searcher").innerHTML = Suche;  write(day_at_moment);  });
  };
};


function hide() {
  document.getElementById("hidden_bar").style.height = "0";
  document.getElementById("hidden_bar").style.overflow = "hidden";
  document.getElementById("hidden_bar").style.opacity = "0.0";
};

function show() {
  document.getElementById("hidden_bar").style.height = "auto";
  document.getElementById("hidden_bar").style.opacity = "1.0";
  alert(document.getElementById("click_menue_button").innerHTML);
  //document.getElementById("hidden_bar").style.filter = "opacity(1.0)";
};


function adder() {
  //document.getElementById("click_menue_button").addEventListener("mouseout", hide);
  //document.getElementById("click_menue_button").addEventListener("click", show);
  //document.getElementById("menue_button").addEventListener("mouseout", function(){ hide() });
  //document.getElementById("hidden_bar").addEventListener("mouseover", function(){ show() });
  //document.getElementById("hidden_bar").addEventListener("mouseout", function(){ hide() });

  document.getElementById("Tag_0").addEventListener("click", function(){ write(Tag_0);  day_at_moment = Tag_0; });
  document.getElementById("Tag_1").addEventListener("click", function(){ write(Tag_1);  day_at_moment = Tag_1; });
  document.getElementById("Tag_2").addEventListener("click", function(){ write(Tag_2);  day_at_moment = Tag_2; });
  document.getElementById("Tag_3").addEventListener("click", function(){ write(Tag_3);  day_at_moment = Tag_3; });
  document.getElementById("Tag_4").addEventListener("click", function(){ write(Tag_4);  day_at_moment = Tag_4; });

  //eventListener for day-buttons

  document.getElementById("next").addEventListener("click", next_day);
  //eventlistener for next day

  help_first("5", "a");  help_first("5", "b");  help_first("5", "c");  help_first("5", "d");
  help_first("6", "a");  help_first("6", "b");  help_first("6", "c");  help_first("6", "d");
  help_first("7", "a");  help_first("7", "b");  help_first("7", "c");  help_first("7", "d");
  help_first("8", "a");  help_first("8", "b");  help_first("8", "c");  help_first("8", "d");
  help_first("9", "a");  help_first("9", "b");  help_first("9", "c");  help_first("9", "d");
  help_first("E", "a");  help_first("E", "b");  help_first("E", "c");  help_first("E", "d");

  help_first("x5", "5");  help_first("x6", "6");  help_first("x7", "7");  help_first("x8", "8");  help_first("x9", "9");  help_first("xE", "E");  help_first("Q1-2", "");  help_first("Q3-4", "");
  //eventlistener for 5-Q Klasses
};



//From here on this is JS that you are allowed to change
