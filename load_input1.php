<?php

session_start();
include('server.php');

$conn = new mysqli($host, $db_user, $db_password, $db_name);

if ($conn->connect_error) {
    die("Polaczenie nieudane: " . $conn->connect_error);
}


  
$sql = 'select DISTINCT  ODJAZD FROM `table 2`';
$result = $conn->query($sql);

    if($result->num_rows > 0){
         $TabRow = array();
         $i = 0;
        
        while($row = $result->fetch_assoc()) {
      $TabRow[$i] = $row['ODJAZD'];
         $i++;
        $dl = $i;
        }
        
        
    $html_result = "";
        
    for( $i = 0; $i < $dl; $i++ ){
         $html_result .= '<option value="' . $TabRow[$i] . '">' . $TabRow[$i] . '</option>';   
        
        
    }
         

echo $html_result;  
    }
    
    else {
        
echo "0 results";
   }
    
  

$conn->close();
   
   
?>