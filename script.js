



$(function() {
    $(".btn").click(function(){
        $(this).button('loading').delay(1000).queue(function() {
        // $(this).button('reset');
        // $(this).dequeue(); 
        });
    });
});  


function myFunction() {
  document.getElementById("demo").innerHTML="Paragraph changed.";
}