<?php
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


class delete{

  public $sku;
  function __construct()
      {
          $this->sku = $_POST['id'];
      }
}

class delPro extends delete{
  function __construct($pdo)
  {
      parent::__construct();
      $this->pdo = $pdo;
  }
  public function deleteProducts()
  {    
      foreach ($this->sku as $item){
          $query = $this->pdo->prepare("DELETE FROM products WHERE product_sku='".$item."'");
          $query->execute();
          return $query->fetch();
      }
  }	
  public function deleteValues()
  {    
      foreach ($this->sku as $item){
          $query = $this->pdo->prepare("DELETE FROM p_values WHERE product_sku='".$item."'");
          $query->execute();
          return $query->fetch();
      }
  }	
}

$delpro = new delPro ($pdo);
$delpro->deleteProducts();
$delpro->deleteValues();

