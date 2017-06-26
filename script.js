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
var letterCounter = 0;
var sentenceCounter = 0;
var currentSentence = 0;

$('#keyboard-upper-container').hide();
$( document ).ready(function() {
    showSentence();
    //switches between lowercase and uppercase
    $(document).on('keydown',function(){
        if (event.which === 16) {
            $('#keyboard-lower-container').hide();
            $('#keyboard-upper-container').show();
        }
    }); 
    $(document).on('keyup',function(){
        if (event.which === 16) {
        $('#keyboard-upper-container').hide();
        $('#keyboard-lower-container').show();
        }
    });
    $(document).on('keydown', function(e) {
        if(e.which >= 48 || e.which <= 57) {
            addHighlight(e.which);
        }
        if(e.which >= 65 || e.which <= 90){
             addHighlight(e.which + 32);
        }
        if (e.which === 49 && e.shiftKey){
            addHighlight(e.which -16);
        }
     });    
    $(document).on('keyup', function(e) {
        if (e.which >= 65 || e.which <= 90 || e.which >= 123 || e.which <= 126 && e.shiftKey) {
                removeHighlight(e.which);
        }
        if(e.which >= 48 || e.which <= 57) {
            removeHighlight(e.which);
        }
        if(e.which >= 65 && e.which <= 90){
             removeHighlight(e.which + 32);
        }
        if (e.which === 49 && e.shiftKey){
            removeHighlight(e.which -16);
        }
    }); 
    $('#target-letter').append(sentences[0][letterCounter++]);
    $(document).on('keypress', function(e) {
        showText(str1); 
    });
});
function addHighlight(code){
            $('#' + code).css('background-color', 'yellow');
}
function removeHighlight(code, defaultColor){
            $('#' + code).css('background-color', '#f5f5f5');
}
 
var showText = function (str, code) {   
    if (letterCounter < str.length) {        
        $('#target-letter').empty();
        $('#target-letter').append(str[letterCounter++]);
        $( "#yellow-block" ).animate({ "left": "+=18px" }, 'fast' ); 
    }
}

var showSentence = function () {   
    $('#sentence').empty();
    $('#sentence').append(sentences[sentenceCounter]);
}




































//      $(document).on('keypress', function(e) {
//             // appendLetter(e.which);
//             moveYellowBlock(str1);
//             trackLetters(str1);
//     }); 
// });

// function appendLetter (code){
//     if(code){
//         $('#target-letter').empty(String.fromCharCode(code));
//         $('#target-letter').append(String.fromCharCode(code));
//     }  
// }
// function moveYellowBlock(){
//         $( "#yellow-block" ).animate({ "left": "+=18px" }, "fast" );
// }
// function trackLetters(str) {
//         console.log(str.charAt(0));
//         $('#target-letter').append(str.charAt(0));
// }


//   var currentLetterCode = currentSentence.charCodeAt(letterCounter);
        // console.log(currentLetterCode);
    // }

    // currentSentence = sentences[sentenceCounter];
    // sentenceCounter++;