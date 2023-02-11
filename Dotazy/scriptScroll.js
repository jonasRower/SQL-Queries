$(document).ready(function()
{

    //propoji posuvniky mezi sebou
    $(".left-half").scroll(function () { 
        $(".right-half").scrollTop($(".left-half").scrollTop());
        $(".right-half").scrollLeft($(".left-half").scrollLeft());
    });
    $(".right-half").scroll(function () { 
        $(".left-half").scrollTop($(".right-half").scrollTop());
        $(".left-half").scrollLeft($(".right-half").scrollLeft());
    });

    //nastavi stejnou vysku radku
    var i = -1;
    $(".trL").each(function(){
        
        i = i + 1;
        var $vyskaRadkuL = $('.trL').eq(i).height();
        var $vyskaRadkuR = $('.trR').eq(i).height();

        //nastavi vysku radku takovou aby byl radek vyssi
        if($vyskaRadkuL > $vyskaRadkuR ){
            var $vyskaRadku = $vyskaRadkuL;
        }
        else {
            var $vyskaRadku = $vyskaRadkuR;
        }

        $('.trR').eq(i).height($vyskaRadku);
        $('.trL').eq(i).height($vyskaRadku);
        
    });

    //nastavi stejnou sirku sloupcu hlavicky, jako stejnou sirku sloupce tela tabulky
    //tabulka vlevo
    var i = -1;
    $(".thL").each(function(){ 
        var $sirkaSloupceTabulky = $('.tdL').eq(0).width();
        $('.thL').eq(0).width($sirkaSloupceTabulky);
        
        var $sirkaSloupceTabulky = $('.tdL').eq(1).width();
        $('.thL').eq(1).width($sirkaSloupceTabulky);    
    });

    //tabulka vpravo
    $(".thR").each(function(){
        var $sirkaSloupceTabulky = $('.tdR').eq(0).width();
        $('.thR').eq(0).width($sirkaSloupceTabulky);
        
        var $sirkaSloupceTabulky = $('.tdR').eq(1).width();
        $('.thR').eq(1).width($sirkaSloupceTabulky);    
    });


});