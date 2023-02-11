function codeAddress() {
    var x = document.getElementById("infoDiv");
    x.style.display = "none";
}
window.onload = codeAddress;

//zobrazuje a skrývá info    
function myFunction() {
    if( $("#InfoButt").text() == "Info"){
        $("#InfoButt").text("Skrýt Info");
    }
    else {$("#InfoButt").text("Info");}
    
  var x = document.getElementById("infoDiv");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// otevre pribuzny nahled
$(document).ready(function(){

  $(document).on("click",".pribuzny",function(){
      var nazevHtml = this.id + ".html"
      zobrazDotazHtml(nazevHtml)
  });

  function zobrazDotazHtml(nazevHtml) { 
    var cetaHtml = nazevHtml;
    window.open(cetaHtml, "_blank");
  } 
});