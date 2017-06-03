<?php
$name = $_GET['pass']

echo '<script type="text/javascript" language="Javascript"> 
alert("' + $name + '"); 
</script> ';


$f = fopen('test', 'rw');

foreach($f as &$line) {
  $s = preg_split(";", $line);
  if($s[5]==$pass){
    $s = "done";
    echo '<script type="text/javascript" language="Javascript"> 
    alert("done"); 
    </script> ';
  }
}
?>
