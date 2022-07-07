
  $(document).ready(function () {
$(".button1").click(function() {
   alert("Sorry, try again!");
   });
});

$(document).ready(function () {
   $(".button2").click(function() {
      alert("Sorry, try again!");

      });
   });
  
  $(document).ready(function () {
   $(".button3").click(function() {
      alert("Congrats, you're correct!");
      });
    $(".button4").click(function(){
      $("#container1").css("border-color", "lightblue");
    });
    $(".button5").click(function(){
      $("#container1").css("border-color", "#5c755e");
    });
    $(".button6").click(function(){
      $("#container1").css("border-color", "lightpink");
    });
    
   });
   
   document.querySelector('#contact-form').addEventListener('submit', (e) => {
      e.preventDefault();
      e.target.elements.name.value = '';
      e.target.elements.email.value = '';
      e.target.elements.message.value = '';
    });
  




