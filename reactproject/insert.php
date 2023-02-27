<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-type, Authorization");
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


$sku = $_POST['sku'];
$name = $_POST['name'];

if($_POST['price']>0){
$price = $_POST['price'];
}
if($_POST['type']==='book'){
    $product_type='Book';
}else if($_POST['type']==='dvd'){
    $product_type='DVD';
}else if($_POST['type']==='furniture'){
    $product_type='Furniture';
}
if (isset($_POST['dvd'])&& $_POST['dvd']>0) {
    $unique = 'Size: '.$_POST['size'].' MB';
  }
if (isset($_POST['book'])&& $_POST['book']>0) {
    $unique = 'Weight: '.$_POST['weight']. ' KG';
  }
if (isset($_POST['height'])&& $_POST['height']>0) {
    $height = $_POST['height'];
  }
if (isset($_POST['width'])&& $_POST['width']>0) {
    $width = $_POST['width'];
  }
if (isset($_POST['length']) && $_POST['length']>0) {
    $length = $_POST['length'];
  }
if($_POST['type']==='furniture'){
    $unique='Dimensions: '.$height.'x'.$width.'x'.$length;
}
class validEntry{
    public function check_Entry($sku,$name,$price,$product_type,$unique){
        if (empty($sku)||empty($name)||empty($price)||empty($product_type)||empty($unique)) {
          };
    }

}

$empt = new validEntry();
$empt->check_Entry($sku,$name,$price,$product_type,$unique);
class duplicates{

    function __construct($pdo)
        {
            $this->pdo = $pdo;
        }
    public function check_duplicates($sku)
    {    
            $query = $this->pdo->prepare("SELECT product_sku FROM products WHERE id = '".$sku."'");
            $query->execute();
            $query->fetch();
            if ($query->rowCount() > 0) {
            }
    }   
}

$dupli = new duplicates($pdo);
$dupli->check_duplicates($sku);

class insert{

    function __construct($pdo)
        {
            $this->pdo = $pdo;
        }
    public function insert_sku($sku,$product_type)
    {    
        $query = $this->pdo->prepare("INSERT INTO products (product_sku,product_type) VALUES ('".$sku."','".$product_type."')");
        $query->execute();
        return $query->fetch();
    }	 
    public function insert_name($sku,$name)
    {    
        $query = $this->pdo->prepare("INSERT INTO p_values (product_sku,att_id,product_value) VALUES ('".$sku."',1,'".$name."')");
        $query->execute();
        return $query->fetch();
    }
    public function insert_value($sku,$price)
    {    
        $query = $this->pdo->prepare("INSERT INTO p_values (product_sku,att_id,product_value) VALUES ('".$sku."',2,'".$price."')");
        $query->execute();
        return $query->fetch();
    }
    public function insert_unique($sku,$unique)
    {    
        $att_id = $this->pdo->query("SELECT uniqueatt.id FROM uniqueatt INNER JOIN products ON products.product_type=uniqueatt.p_type WHERE products.product_sku='".$sku."'")->fetch(PDO::FETCH_NUM);
        $query = $this->pdo->prepare("INSERT INTO p_values (product_sku,att_id,product_value) VALUES ('".$sku."','".$att_id[0]."','".$unique."')");
        $query->execute();
        return $query->fetch();
    }
};

$trigger = new insert($pdo);
$trigger->insert_sku($sku,$product_type);
$trigger->insert_name($sku,$name);
$trigger->insert_value($sku,$price);
$trigger->insert_unique($sku,$unique);

?>