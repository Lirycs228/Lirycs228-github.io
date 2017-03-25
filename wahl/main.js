//Erik
/* set up XMLHttpRequest */
var out = document.getElementById("outter");
var url = "Mappe1.csv";
var oReq = new XMLHttpRequest();
oReq.open("GET", url, true);
oReq.responseType = "arraybuffer";

oReq.onload = function(e) {
  var arraybuffer = oReq.response;

  /* convert data to binary string */
  var data = new Uint8Array(arraybuffer);
  var arr = new Array();
  for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
  var bstr = arr.join("");

  /* Call XLSX */
  var workbook = XLSX.read(bstr, {type:"binary"});

  /* DO SOMETHING WITH workbook HERE */
  process_wb(workbook);
}
function process_wb(wb) {
  console.log("Hallo<");
  var first_sheet_name = workbook.SheetNames[0];
  var address_of_cell = 'A1';

  /* Get worksheet */
  var worksheet = workbook.Sheets[first_sheet_name];

  /* Find desired cell */
  var desired_cell = worksheet[address_of_cell];

  /* Get the value */
  var desired_value = (desired_cell ? desired_cell.v : undefined);

  out.innerHTML = desired_value;
}

oReq.send();
