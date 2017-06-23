  


var sentences = ['ten ate neite ate nee enet ite ate inet ent eate',
'Too ato too nOt enot one totA not anot tOO aNot', 
'oat itain oat tain nate eate tea anne inant nean', 
'itant eate anot eat nato inate eat anot tain eat' , 
'nee ene ate ite tent tiet ent ine ene ete ene ate'];


$('#keyboard-upper-container').hide();
$( document ).ready(function() {
    //switches between lowercase and uppercase
    $(document).on('keydown',function(e){
        if (e.which === 16) {
            $('#keyboard-lower-container').hide();
            $('#keyboard-upper-container').show();
            console.log(e.which);
        }
    $(document).on('keyup',function(e){
        if (e.which === 16) {
        $('#keyboard-upper-container').hide();
        $('#keyboard-lower-container').show();
        }
    }); 
});
$('#sentence').append(sentences[0]);



    $(document).on('keydown', function(e) {
        if (e.which == 16){
            e.which +32;
            handleHighlight(e.which);
        } else {
        handleHighlight(e.which);
        }
        });
    $(document).on('keyup', function(e) {
        handleHighlight(e.which + 32, true);
        if (e.which == 16) {
            handleHighlight(e.which);
        } else {
        handleHighlight(e.which);
        }
    
    });    
});

function handleHighlight(code, defaultColor){
        if (defaultColor){
            $('#' + code).css('background-color', '#f5f5f5');
        } else {
            $('#' + code).css('background-color', 'yellow');
        }
}

