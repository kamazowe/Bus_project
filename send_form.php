<?php
session_start();
include('server.php');

$conn = new mysqli($host, $db_user, $db_password, $db_name);

if ($conn->connect_error) {
    die("Polaczenie nieudane: " . $conn->connect_error);
} 

    //  $TabRow[$i][1] 
// $i nr wiersza z zapytania
// [1] tablica asocjacyjna nr kolumny 

$odjazd = $_POST["odjazd"];
$przyjazd =  $_POST["przyjazd"];
// check import arguments 

// Wczytanie danych    


 $sql = "SELECT ODJAZD,PRZEZ,PRZYJAZD,GODZINY  FROM `table 2` where ODJAZD='" . $odjazd . "' and  PRZYJAZD='" . $przyjazd . "' ";



  $result = $conn->query($sql);

   if ($result->num_rows > 0) {
      $TabRow = array();
       $i = 0;
    // wyswietl jezeli jest cos w bazie
       
       //zapis do tablicy 
    while($row = $result->fetch_assoc()) {
      $TabRow[$i][0] = $row['ODJAZD'];
         $TabRow[$i][1] = $row['PRZEZ'];
         $TabRow[$i][2] = $row['PRZYJAZD'];
         $TabRow[$i][3] = $row['GODZINY'];
        $i++;
       $dl = $i;
    }
       
      
       
      
        
        // zapis danych do kodu zmiennej w HTML
        $html_result = "";
   for( $i = 0; $i < $dl; $i++ ){
       $html_result .= '<tr>';
      
       for($j=0; $j< 4; $j++)
       {
           
           if($j == 1){
               $html_result .= '<td class="hideme">'  .  $TabRow[$i][$j] . '</td>' ; 
           }
           else{
           //
       $html_result .= '<td>'  .  $TabRow[$i][$j] . '</td>' ;
       }
       }
        $html_result .= '</tr>';
      
       
   }
       
       // zwracanie kodu HTML
         echo $html_result ;
        
             } else {
    echo "0 results";
   }
        
    
     
 //   include('result.php'); 
       


$conn->close();
?>    