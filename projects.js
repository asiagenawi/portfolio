
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
   });
   
   
   document.querySelector('#contact-form').addEventListener('submit', (e) => {
      e.preventDefault();
      e.target.elements.name.value = '';
      e.target.elements.email.value = '';
      e.target.elements.message.value = '';
    });
  





    $('.dark-mode').css({
      margin: "5px",
      padding: "10px",
      color: "black"
  
  });


