alert("Häh");
var fileName = "test.txt";
var data = "";

function getInfoByCode(c){
  alert("get info");
  if( data == "" ){
    return 'DataNotReady' ;
    alert("Data not ready")
  } else {
    alert("ready data")
    var rx = new RegExp( "^(" + c + ")\\s+\\|\\s+(.+)\\s+\\|\\s+\\s+(.+)\\|", 'm' ) ;

    var values = data.match(rx,'m');
    return { a:values[2] , b:values[3] };
  }
};

function readBody(xhr) {
    var d;
    if (!xhr.responseType || xhr.responseType === "text") {
      alert("text");
        d = xhr.responseText;
    } else if (xhr.responseType === "document") {
      alert("document");
        d = xhr.responseXML;
    } else {
      alert("else uh oh");
        d = xhr.response;
    }
    return d;
}

req = new XMLHttpRequest();
req.onreadystatechange = function() {
  alert("onreadystatechange");
  alert("Loading" + req.readyState);
  if (req.readyState == 4) {
    alert("End");
    alert(readBody(req));
    data = readBody(req);
    var ret = getInfoByCode("b");
    alert(ret);
  }
};
req.open("GET", fileName, true);
alert("Start");
req.send();
