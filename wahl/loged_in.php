$name = $_GET["name"]

$f = fopen('test', 'rw');

foreach($f as &$line) {
  $s = preg_split(";", $line);
  if($s[5]==$name){
    $s = "done";
  }
}
