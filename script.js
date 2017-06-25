  


var sentences = ['ten ate neite ate nee enet ite ate inet ent eate',
'Too ato too nOt enot one totA not anot tOO aNot', 
'oat itain oat tain nate eate tea anne inant nean', 
'itant eate anot eat nato inate eat anot tain eat' , 
'nee ene ate ite tent tiet ent ine ene ete ene ate'];

var str1 = sentences[0];
var str2 = sentences[1];
var str3 = sentences[2];
var str4 = sentences[3];
var str5 = sentences[4];

$('#keyboard-upper-container').hide();
$( document ).ready(function() {
    //switches between lowercase and uppercase
    $(document).on('keydown',function(e){
        if (e.which === 16) {
            $('#keyboard-lower-container').hide();
            $('#keyboard-upper-container').show();
        }
    }); 
    $(document).on('keyup',function(e){
        if (e.which === 16) {
        $('#keyboard-upper-container').hide();
        $('#keyboard-lower-container').show();
        }
    });
    $(document).on('keydown', function(e) {
        // if (e.which >= 65 || e.which <= 90 || e.which === 32 && e.which == e.shiftKey) {
        //         console.log(e.charCode + 65);
        // } 
        if(e.which === 48 || e.which >= 48 || e.which <= 57) {
            addHighlight(e.which);
        }
    //     if (e.shiftKey && e.which === 49){
    //         addHighlight(e.preventDefualt);
    // }
        if(e.which >= 65 || e.which <= 90){
             addHighlight(e.which + 32);
        }
        // if (e.whcih >= 51 || e.whcih >= 53 && e.shiftKey){
        //     addHighlight(e.which - 18);
        // if(e.shiftKey == false){
        //     addHighlight(e.charCode);
        if (e.which === 49 && e.shiftKey){
            addHighlight(e.which -16);
        }
        // }
     });    
    $(document).on('keyup', function(e) {
        if (e.which >= 65 || e.which <= 90 || e.which >= 123 || e.which <= 126 && e.shiftKey) {
                removeHighlight(e.which);
        }
        if(e.which === 48 || e.which >= 48 || e.which <= 57) {
            removeHighlight(e.which);
        }
        if(e.which >= 65 && e.which <= 90){
             removeHighlight(e.which + 32);
        }
        //  if(e.which >= 65 || e.which <= 90){
        //      removeHighlight(e.which + 32);
        // } 
        if (e.which === 49 && e.shiftKey){
            removeHighlight(e.which -16);
        }
    }); 
     $(document).on('keypress', function(e) {
        if(e.which){
            appendLetter(e.which);
        }
     }); 
    $('#sentence').append(str1);  

});
function addHighlight(code){
        // if (defaultColor){
        //     $('#' + code).css('background-color', '#f5f5f5');
        // } else {
            $('#' + code).css('background-color', 'yellow');
        // }
}
function removeHighlight(code, defaultColor){
        // if (defaultColor){
        //     $('#' + code).css('background-color', '#f5f5f5');
        // } else {
            $('#' + code).css('background-color', '#f5f5f5');
        // }
}

function appendLetter (code){
    if(code == 116){
        $('#target-letter').append(String.fromCharCode(code));
    } 
}