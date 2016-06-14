$('input[type=radio][name=radio1]').change(function() {    
    $("#circle1").removeClass();
    if($(this).val() == "red"){   
        $('#circle1').addClass('redCircle');
    }
    else if($(this).val() == "green"){
        $('#circle1').addClass('greenCircle');
    }
    else if($(this).val() == "blue"){
        $('#circle1').addClass('blueCircle');
    }
});
$('input[type=radio][name=radio2]').change(function() {    
    $("#circle2").removeClass();
    if($(this).val() == "red"){   
        $('#circle2').addClass('redCircle');
    }
    else if($(this).val() == "green"){
        $('#circle2').addClass('greenCircle');
    }
    else if($(this).val() == "blue"){
        $('#circle2').addClass('blueCircle');
    }
});
$('input[type=radio][name=radio3]').change(function() {    
    $("#circle3").removeClass();
    if($(this).val() == "red"){   
        $('#circle3').addClass('redCircle');
    }
    else if($(this).val() == "green"){
        $('#circle3').addClass('greenCircle');
    }
    else if($(this).val() == "blue"){
        $('#circle3').addClass('blueCircle');
    }
});