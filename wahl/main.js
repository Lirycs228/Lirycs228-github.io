var fileName = "test.txt";
var data = "";

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
  alert("Loading" + req.readyState);
  if (req.readyState == 4) {
    data = readBody(req);
    alert(data);
    data = data.split("\n");
    var current;
    for(line = 0; line < data.length - 1; line++) {
      current = data[line].split(";");
      current = current[0];
      alert(data[line]);
      alert(current);
    }
  }
};
req.open("GET", fileName, true);
req.send();
