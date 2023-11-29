$('li').on('click',function() {
    $(this).text("clicked");
    $(this).fadeOut(5000);
});
$(document).on('click',function () {
    $('h1').fadeOut(5000);
});
$('li').not(":nth-child(even)").css("background-color", "skyblue");

// using attr() method:
$('button').on('click', function(){
    $('a').attr('href','https://github.com/');
    console.log($('a').attr('href'));
}); 
