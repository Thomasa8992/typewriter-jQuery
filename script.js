$(document).ready(function () {
    var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 
    'Too ato too nOt enot one totA not anot tOO aNot', 
    'oat itain oat tain nate eate tea anne inant nean', 
    'itant eate anot eat nato inate eat anot tain eat', 
    'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    var sentenceCounter = 0;
    var letterCounter = 0;
    var targetLetter = $("#target-letter");
    targetLetter.html(currentLetter);
    var currentSentence = sentences[0];
    var currentLetter = currentSentence[0];
    var mistakes = 0; 
    $("#sentence").append(currentSentence); 
    $("#target-letter").append(currentLetter); 
    $("#keyboard-upper-container").hide(); 
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
    $(document).keypress(function (event) {
        var currentSentence = sentences[sentenceCounter];
        var currentLetter = currentSentence[letterCounter];
        $("#yellow-block").css("left", "+=17.5px"); 
        letterCounter++;
        var nextLetter = currentSentence[letterCounter]; 
        targetLetter.html(nextLetter); 
        if (letterCounter == currentSentence.length) { 
            $("#sentence").empty(); 
            sentenceCounter++; 
            currentSentence = sentences[sentenceCounter]; 
            $("#sentence").append(sentences[sentenceCounter]); 
            letterCounter = 0; 
            if (sentenceCounter < sentences.length - 1) { 
                var nextLetter = currentSentence[letterCounter];
            }
            targetLetter.html(nextLetter); 
            $("#yellow-block").css({left:17}); 
            $("#feedback").empty(); 
        }
        if (letterCounter < currentSentence.length -1) { 
            if (event.which === currentLetter.charCodeAt()) { 
                $("#feedback").append("<i class = 'glyphicon glyphicon-ok'></i>"); 
            } else {
                $("#feedback").append("<i class = 'glyphicon glyphicon-remove'></i>"); 
                mistakes++; 
            }
        }
    });
    function addHighlight(code, color){
    $('#' + code).css('background-color', 'yellow');
}
function removeHighlight(code, defaultColor){
    $('#' + code).css('background-color', '#f5f5f5');
}
});
