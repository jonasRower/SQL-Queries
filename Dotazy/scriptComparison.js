 //obarvi jednotlive radky, ktere jsou rozdilne
 var $pocetRadkuL;
 var $pocetRadkuR;
 var $pocetRadkuMax;

 var $pocetSloupcuL;
 var $pocetSloupcuR;
 var $pocetSloupcuMax;
 
 //----------------------------------------------------
 //zjisti pocet radku
 $pocetRadkuL = $('.trL').length;
 $pocetRadkuR = $('.trR').length;
 
 if($pocetRadkuL > $pocetRadkuR){
     $pocetRadkuMax = $pocetRadkuL;
 }
 else {
     $pocetRadkuMax = $pocetRadkuR
 }

 //----------------------------------------------------
 //zjisti pocet sloupcu
 $pocetSloupcuL = $('.thL').length;
 $pocetSloupcuR = $('.thR').length;

 if($pocetSloupcuL > $pocetSloupcuR){
     $pocetSloupcuMax = $pocetSloupcuL;
 }
 else {
     $pocetSloupcuMax = $pocetSloupcuR
 }
 
 var $bunkaL;
 var $bunkaR;
 
 for ($r = 1; $r <= $pocetRadkuMax; $r++) {
     for ($s = 0; $s < $pocetSloupcuMax; $s++) {
 
         $bunkaL = $("#tableLeft").find('tr:eq( ' + $r + ' )').find('td:eq( ' + $s + ' )').text();
         $bunkaR = $("#tableRight").find('tr:eq( ' + $r + ' )').find('td:eq( ' + $s + ' )').text();
         
         //prebarvi bunky, pokud nalezne jinou hodnotu v $bunkaL a $bunkaR 
         if($bunkaL != $bunkaR){
             if($bunkaR != ""){
                 $("#tableLeft").find('tr:eq( ' + $r + ' )').find('td:eq( ' + $s + ' )').css( "color", "red" );
             }
             if($bunkaL != ""){
                 $("#tableRight").find('tr:eq( ' + $r + ' )').find('td:eq( ' + $s + ' )').css( "color", "red" );
             }    
         }
 
     }
     
 }
