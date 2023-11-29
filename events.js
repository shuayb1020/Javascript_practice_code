$("body").click(function () { 
    console.log("Clicked!"); 
});
$("#awesome").on('click', function(){
    console.log('I clicked Awesome Button');
    
});


$("#awesome").hover(function () {
    $(this).html("<h6>This is Awesome button <h6>")
        
        
    }, function () {
        $(this).html("Awesome")
    }
);
// $('img').hide();
// $('img').fadeIn(5000);
$('.img').on('click', function() {
    $(this).toggleClass('selected');
});


