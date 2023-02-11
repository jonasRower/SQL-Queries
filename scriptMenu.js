//-------------- Obsluhuje menu -----------------
//pri kliknuti do dropdown menu se presmeruje na nasledujici vyber tabulek 
$(document).ready(function(){

    $("home").hide();
    $("header").show();
    $("#vyberInfo").show();
    $("#pocetPolozek").show();

    obarvyRadkyVsechnyPriklady()

    $( ".dropdown-item" ).click(function(){

        $("home").hide();
        $("header").show();
        $("#vyberInfo").show();
        $("#pocetPolozek").show();

        if(this.id == "a1"){
            zobrazPolozkyWereIN(); 
        }
        if(this.id == "a2"){
            zobrazWhereJednoduche(); 
        }
        if(this.id == "a3"){
            zobrazWhereVypocet(); 
        }
        if(this.id == "a4"){
            zobrazWhereNOT(); 
        }
        if(this.id == "a5"){
            zobrazWhereNULL(); 
        }
        if(this.id == "a6a"){
            zobrazWhereAnd(); 
        }
        if(this.id == "a6b"){
            zobrazWhereAndOr(); 
        }
        if(this.id == "a7a"){
            zobrazWhereOr(); 
        }
        if(this.id == "a7b"){
            zobrazWhereAndOr(); 
        }
        if(this.id == "a8"){
            zobrazWhereBetween(); 
        }
        if(this.id == "a9"){
            zobrazWhereUnion(); 
        }

    });


    $( ".navbar-brand" ).click(function(){

        if(this.id == "a0"){
            $("home").hide();
            $("header").show();
            $("#vyberInfo").show();
            $("#pocetPolozek").show();

            zobrazVsechnyRadky(); 
            obarvyRadkyVsechnyPriklady();
        }

        if(this.id == "home"){
            $("header").hide();
            $("home").show();
            $("#vyberInfo").hide();
            $("#pocetPolozek").hide();
        }  

    });    
   
});


//Zobrazi vsechny priklady
$(document).ready(function(){
    $(document).on("click",".vsechnyPriklady",function(){
        zobrazVsechnyRadky();
    });
});


// Uzavre se dropdown, pokud se klikne jinam
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
        }
    }
}


//-------------- Zobrazuje /skryva radky tabulky -----------------
//Zobrazi vsechny radky
function zobrazVsechnyRadky(){

    $("#vyberInfo").text("Všechny dostupné příklady");
    $("#pocetPolozek").text("Počet položek : 80");

    $(".trTab").show();
}

//Zobrazi WHERE-IN
function zobrazPolozkyWereIN(){
    var idshow = ["#tr1", "#tr2", "#tr8", "#tr9", "#tr13", "#tr14", "#tr15", "#tr38", "#tr42", "#tr60"];

    $("#vyberInfo").text("WHERE + IN");
    $("#pocetPolozek").text("Počet položek : 10");

    $(".trTab").hide();
    idshow.forEach(zobrazID);
    obarvyRadky(idshow);

}

//Zobrazi WHERE + "=", "<", ">"
function zobrazWhereJednoduche(){
    var idshow = ["#tr4", "#tr5", "#tr7", "#tr20", "#tr31", "#tr41", "#tr45"];
    
    $("#vyberInfo").text("WHERE základní");
    $("#pocetPolozek").text("Počet položek : 7");
    
    $(".trTab").hide();
    idshow.forEach(zobrazID);
    obarvyRadky(idshow);

}

//Zobrazi WHERE + vypocet
function zobrazWhereVypocet(){
    var idshow = ["#tr31", "#tr41", "#tr45"];

    $("#vyberInfo").text("WHERE + výpočty");
    $("#pocetPolozek").text("Počet položek : 3");

    $(".trTab").hide();
    idshow.forEach(zobrazID);
    obarvyRadky(idshow);

}

//Zobrazi WHERE + NOT
function zobrazWhereNOT(){
    var idshow = ["#tr6", "#tr7", "#tr8", "#tr19", "#tr28", "#tr29", "#tr38", "#tr40", "#tr46", "#tr49", "#tr54", "#tr56", "#tr56b", "#tr57", "#tr59", "#tr59b", "#tr60", "#tr65" , "#tr67", "#tr69", "#tr71", "#tr73"];
    
    $("#vyberInfo").text("WHERE + NOT");
    $("#pocetPolozek").text("Počet položek : 22");
    
    $(".trTab").hide();
    idshow.forEach(zobrazID);
    obarvyRadky(idshow);

}

//Zobrazi WHERE + NULL
function zobrazWhereNULL(){
    var idshow = ["#tr6", "#tr26", "#tr72", "#tr73"];

    $("#vyberInfo").text("WHERE + NULL");
    $("#pocetPolozek").text("Počet položek : 4");

    $(".trTab").hide();
    idshow.forEach(zobrazID);
    obarvyRadky(idshow);

}


//Zobrazi WHERE + AND
function zobrazWhereAnd(){
    var idshow = ["#tr10", "#tr11", "#tr12", "#tr12b", "#tr21", "#tr22", "#tr27b", "#tr28", "#tr30", "#tr30b", "#tr34", "#tr35", "#tr37", "#tr38", "#tr59", "#tr39", "#tr46", "#tr47" , "#tr50", "#tr51", "#tr52", "#tr53", "#tr54", "#tr54b", "#tr56" , "#tr56b", "#tr57", "#tr59", "#tr59b", "#tr56" , "#tr56b", "#tr59c", "#tr60", "#tr61"];
    
    $("#vyberInfo").text("WHERE + AND");
    $("#pocetPolozek").text("Počet položek : 31");

    $(".trTab").hide();
    idshow.forEach(zobrazID);
    obarvyRadky(idshow);

}

//Zobrazi WHERE + OR
function zobrazWhereOr(){
    var idshow = ["#tr9", "#tr13", "#tr15", "#tr20", "#tr22", "#tr23", "#tr24", "#tr25", "#tr26", "#tr27", "#tr29", "#tr30", "#tr37", "#tr38", "#tr59", "#tr39", "#tr46", "#tr47" , "#tr48", "#tr49", "#tr56b", "#tr57", "#trX58", "#tr59" , "#tr59b", "#tr59c"];
   
    $("#vyberInfo").text("WHERE + OR");
    $("#pocetPolozek").text("Počet položek : 25");
   
    $(".trTab").hide();
    idshow.forEach(zobrazID);
    obarvyRadky(idshow);

}

//Zobrazi WHERE + AND + OR
function zobrazWhereAndOr(){
    var idshow = ["#tr56b", "#tr57", "#tr59", "#tr59b", "#tr59c"];

    $("#vyberInfo").text("WHERE + AND + OR");
    $("#pocetPolozek").text("Počet položek : 5");

    $(".trTab").hide();
    idshow.forEach(zobrazID);
    obarvyRadky(idshow);

}

//Zobrazi WHERE + BETWEEN
function zobrazWhereBetween(){
    var idshow = ["#tr10", "#tr11", "#tr12", "#tr12b", "#tr21", "#tr30", "#tr30b", "#tr53", "#tr60", "#tr61"];
    
    $("#vyberInfo").text("WHERE + BETWEEN");
    $("#pocetPolozek").text("Počet položek : 10");
    
    $(".trTab").hide();
    idshow.forEach(zobrazID);
    obarvyRadky(idshow);

}

//Zobrazi WHERE + UNION
function zobrazWhereUnion(){
    var idshow = ["#tr24", "#tr37", "#tr39"];

    $("#vyberInfo").text("WHERE + UNION");
    $("#pocetPolozek").text("Počet položek : 3");

    $(".trTab").hide();
    idshow.forEach(zobrazID);
    obarvyRadky(idshow);

}


//zobrazi radek s prislusnym ID
function zobrazID(item) {
    $(item).show();
}


//skryje radek s prislusnym ID
function skryjID(item) {
    $(item).hide();
}


//jelikoz skryje nektere radky, pak jednotlive radky nejsou spravne obarvene
//tato funkce prebarvuje radky na spravnou barvu
function obarvyRadky(radkyID){

    var lichyID;
    var radekID;
    var radekIDPredchozi; 
    lichyID = false;

    //prebarvi vsechny radky na bilo
    $("tr").css("background", "white");
    
    for (i = 0; i < radkyID.length; i++) {

        radekID = radkyID[i];
        radekIDPredchozi = radkyID[i-1]

        var zbytek = i%2;
        var barvaRadku;
        
        //je-li radek lichy v poradi, pak nastavuje sedivou barvu radku
        if(zbytek == 1){
            barvaRadku = "#white"
        }

        //je-li radek sudy v poradi, pak nastavuje bilou barvu radku
        if(zbytek == 0){
            barvaRadku = "#dddddd"
        }    
        
        $(radekID).css("background-color",barvaRadku);

    }
        
}

function obarvyRadkyVsechnyPriklady(){

    $("tr").css("background", "white");
    $("tr:nth-child(2n)").css("background", "#dddddd");

}



//-------------- Zajistuje prepinani na jednotlive tabulky -----------------
//script naslouchajici jednotlivym tlacitkum v tabulce
$(document).ready(function(){
    $(document).on("click",".butt",function(){
        var nazevHtml = this.id + ".html"
        zobrazDotazHtml(nazevHtml)
    });
});

//script obsluhujici jednotliva tlacitka v tabulce
function zobrazDotazHtml(nazevHtml) { 
    var cetaHtml = "Dotazy/" + nazevHtml
    window.open(cetaHtml, "_blank"); 
} 




/*
<html>
<head>
<title>jQuery nth-child example</title>
 
<script type="text/javascript" src="jquery-1.3.2.min.js"></script>
</head>

<body>

<h1>jQuery nth-child example</h1>

<table border=1>
    <tr><td>Row #1</td></tr>
    <tr><td>Row #2</td></tr>
    <tr><td>Row #3</td></tr>
    <tr><td>Row #4</td></tr>
    <tr><td>Row #5</td></tr>
    <tr><td>Row #6</td></tr>
    <tr><td>Row #7</td></tr>
    <tr><td>Row #8</td></tr>
    <tr><td>Row #9</td></tr>
    <tr><td>Row #10</td></tr>
</table>
<br/>

<button>:nth-child(4)</button>
<button>:nth-child(3n)</button>
<button>:nth-child(even)</button>    
<button>:nth-child(odd)</button>


<script type="text/javascript">
    $("button").click(function () {
      var str = $(this).text();
      $("tr").css("background", "white");
      $("tr" + str).css("background", "coral");
    });
</script>

</body>
</html>
*/