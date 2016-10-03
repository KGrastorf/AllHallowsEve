// $(document).ready(function(){
//   $(".ghost").hover(function(){
//     scream.play();
//         },
//     function(){
//         scream.load();
//     });
//   });
// });
var scream = $("#screamaudio")[0];
console.log(scream);

$("#scream").mouseover(function() {
  var width = document.body.clientWidth - 296;
  scream.play();
  if($("#scream")[0].style.transform == "translateX("+width+"px)"){
    $("#scream").css("transform", "translateX(0)").css("transition-duration", "10s");
  }else{
    $("#scream").css("transform", "translateX("+width+"px)").css("transition-duration", "10s");
  }


});
