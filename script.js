
$( document ).ready(function() {
    $('#keyboard-upper-container').hide();
    //switches between lowercase and uppercase
    $(document).on('keydown',function(e){
        var keycode = 16;
        if (e.which === keycode) {
            $('#keyboard-lower-container').hide();
            $('#keyboard-upper-container').show();
        }
    }).on('keyup',function(){
        $('#keyboard-upper-container').hide();
        $('#keyboard-lower-container').show();
    }); 
    $(document).keypress(function(e){
        var id = $('#id');
        if(e.which === id) {
            // $('#id').addClass('#yellow-block');
            console.log();
        }
    });
});

