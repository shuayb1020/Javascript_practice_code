$(function(){
    $('#add').on("click", function () {
        
        var val = $('input').val();
        if (val !== '') {
            // var elem = $("<li></li>").text(val);
            // $(elem).append(<button class='rem'>X</button>");
            // $("#myList").append(elem);
          
            var elem2=$("<li></li>").text(val);
            
            $(elem2).append("<button class='rem'>X</button>")

           var list=$("#myList").append(elem2);
            
            $(".new").append(list);
        
            $("input").val("");
            $(".new").show();
            $(".rem").on('click', function(){
                $(this).parent().remove();
            });
            $("#canc").on('click', function(){
                $(this).parent().remove(); 
            });
        }
    });
});