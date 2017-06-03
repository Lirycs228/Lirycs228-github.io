<?php
$name = $_GET['pass']

$f = fopen('test', 'rw');

foreach($f as &$line) {
  $s = preg_split(";", $line);
  if($s[5]==$pass){
    $s = "done";
    echo "done";
  }
}
?>
