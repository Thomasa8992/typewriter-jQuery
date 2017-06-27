    var sentences = ['ten ate neite ate nee enet ite ate inet ent eate',
    'Too ato too nOt enot one totA not anot tOO aNot', 
    'oat itain oat tain nate eate tea anne inant nean', 
    'itant eate anot eat nato inate eat anot tain eat' , 
    'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    var mistakes = 0;
    var letterCounter = 0;
    var sentenceCounter = 0;
    var currentSentence = sentences[0];
    var currentLetter;

$( document ).ready(function() {
    $('#keyboard-upper-container').hide();
    $('#target-letter').append(sentences[0][letterCounter++]);
    showSentence();
    //switches between lowercase and uppercase
    $(document).on('keydown',function(e){
        if (event.which === 16) {
            $('#keyboard-lower-container').hide();
            $('#keyboard-upper-container').show();
        }
        if(e.which >= 48 || e.which <= 57) {
            addHighlight(e.which);
        }
        if(e.which >= 65 || e.which <= 90){
             addHighlight(e.which + 32);
        }
    }); 
    $(document).on('keyup',function(e){
        if (event.which === 16) {
        $('#keyboard-upper-container').hide();
        $('#keyboard-lower-container').show();
    }
    if(e.which >= 48 || e.which <= 57) {
            removeHighlight(e.which);
        }
        if(e.which >= 65 && e.which <= 90){
             removeHighlight(e.which + 32);
        }
    });
    $(document).on('keypress', function(e) {
        showText();
    });
});
function addHighlight(code, color){
    $('#' + code).css('background-color', 'yellow');
}
function removeHighlight(code, defaultColor){
    $('#' + code).css('background-color', '#f5f5f5');
}
function showText(code) {   
    if (letterCounter < currentSentence.length) {        
        $('#target-letter').empty();
        $('#target-letter').append(currentSentence[letterCounter++]);
        $( "#yellow-block" ).animate({ "left": "+=17.5px" }, 'fast' ); 
    }       
}
function showSentence() {   
    $('#sentence').empty();
    $('#sentence').append(sentences[sentenceCounter++]);
}
function glyphiconTest(code){
        $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>');
        $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>');
    }
    
// var letterCodeIWantToHit = 97;    
// function handleResponse(code) {
//     if (code === letterCodeIWantToHit) {
//         glyphiconTest(true);
//         letterCounter++;
//         if (letterImOn > lettersInSentence) {
//             goToNextSentence();
//         }
//     } else {
//         glyphiconTest(false);
//     }
// }

// function handleResponse(code){
//     if(code === sentences[0].charCodeAt(letterCounter++)){
//         glyphiconTest(true);
//         letterCounter++;
//     if()
        
//     }
// }

