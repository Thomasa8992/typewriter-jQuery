  


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










    $(document).on('keypress', function(e) {
        // if (e.which >= 65 || e.which <= 90 || e.which === 32 && e.which == 16) {
                addHighlight(e.which);
        // } 
        // if(e.which === 48 || e.which >= 57 || e.which <= 57) {
        //     addHighlight(e.which);
        // }
        // // if(e.which >= 65 || e.which <= 90){
        // //      addHighlight(e.which + 32);
        // // }
        // if (e.whcih >= 33 || e.whcih >= 47 && e.which == 16){
        //     addHighlight(e.which);
        // }
     });    

    $(document).on('keyup', function(e) {
        if (e.which >= 65 || e.which <= 90 || e.which >= 123 || e.which <= 126 && e.which == 16) {
                removeHighlight(e.which);
        }
        if(e.which === 32 || e.which >= 48 || e.which <= 57) {
            removeHighlight(e.which);
        }
         if(e.which >= 65 || e.which <= 90){
             removeHighlight(e.which + 32);
        } 
        if (e.whcih === 50 && e.which == 16){
            addHighlight(e.which + 14);
        }
    });  






    $('#sentence').append(sentences[0]);  
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

// function between(x, min, max) {
//   return x >= min && x <= max;
// }
// // ...
// function between(x, min, max) {
//   return x >= min && x <= max;
// }
// // ...
// if (between(x, 0.001, 0.009)) {
//   // something
// }