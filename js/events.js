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
  $("input").on("keydown", function(key) {
    
    if ($("#typing").val() === "G") {
     return alert(' G was pressed');
    
  }
  alert("you entered the wrong value");
  return;
  
});
}
function submitIt()
{
  $("form").on("submit", function() 
  {
    return alert("Your form is going to be submitted now.");
  })
}

$(document).ready(function(){

// call functions here

getIt()
frameIt()
pressIt()
submitIt()
});
