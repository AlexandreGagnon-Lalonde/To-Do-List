$("input").on("keypress", function(event){
    if (event.which === 13 && $("input").val() !== "") {
        $("ul").append(`<li><span><i class="fas fa-trash"></i></span> ` + $("input").val() + `</li>`);
        $("input").val("");
    }
});

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function() {
        // the second this refers to the parent
        $(this).remove();
    });
    // Stops every subsequent funcitonnality to operate
    event.stopPropagation();
});

$("ul").on("click", "li", function(){
    $(this).toggleClass("done");
});

$("#plus").on("click", function() {
    $("input").fadeToggle();
});

