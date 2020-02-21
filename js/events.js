//define functions here
function getIt()
{
  $('p').on("click", function(){
    //action you want taken
    alert("Hey!");
});
}
function frameIt()
{
    $("img").addClass('tasty').on("load", function(){
                                                      });
}
function pressIt()
{
  $("form").on("keydown", function(key) {
    
    if ($( "input:first" ).val() === "G") {
   return  alert('G is pressed');
   
  }
})
}
function submitIt()
{
  $("form").on("keydown", function() 
  {
    alert("Your form is going to be submitted now.");
  })
}

$(document).ready(function(){

// call functions here

getIt()
frameIt()
pressIt()
submitIt()
});
