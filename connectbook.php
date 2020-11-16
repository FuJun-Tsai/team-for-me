<?php
$dsn='mysql:
      host=localhost;
      port=3306;
      dbname=ed103g4;
      charset=utf8;';
$uesr='ed103g4';
$pass='ed103g4';
$options=array(PDO::ATTR_CASE=>PDO::CASE_NATURAL,
               PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION);
$pdo = new PDO($dsn,$uesr,$pass,$options);
?>