<?php
include 'display.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
$host = 'localhost';
$name = 'products';
$username = 'root';
$password = '';
$id = '';
try {
  $pdo = new PDO('mysql:host=' . $host . ';dbname=' . $name, $username, $password);
} catch (PDOException $e) {
  exit('Error Connecting To DataBase');
}



$db = new display($pdo);
$rows = $pdo->query('SELECT product_sku FROM products')->fetchAll(PDO::FETCH_NUM);
$rowcount = $pdo->query('SELECT count(*) FROM products')->fetchColumn();
if (!$id) echo '[';
$counter = 1;
foreach ($rows as $i) {
  $sku = $db->displaySKU($i[0]);
  $name = $db->displayName($i[0]);
  $value = $db->displayValue($i[0]);
  $unique = $db->displayUnique($i[0]);
  $result = $sku + $name + $value + $unique;
  echo json_encode($result);
  if ($rowcount != $counter) echo ',';
  $counter++;
}
if (!$id) echo ']';
