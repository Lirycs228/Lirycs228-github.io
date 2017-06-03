<?php
$name = $_GET['pass']

echo 'alert("Name: + ' + $name + '");';


$f = fopen('test', 'rw');

foreach($f as &$line) {
  $s = preg_split(";", $line);
  if($s[5]==$pass){
    $s = "done";
    echo 'alert("done");';
  }
}
?>
