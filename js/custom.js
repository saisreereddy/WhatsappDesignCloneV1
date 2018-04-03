    $(document).ready(function(){

      $(".heading-compose").click(function() {
      $(".side-two").css({
        "left": "0"
      });
    });

    $(".newMessage-back").click(function() {
      $(".side-two").css({
        "left": "-100%"
      });
    });

   $("#profile_id").click(function(){
$("#not_profile_content").css("display", "none");
$("#profile_content").css("display", "block");
   });


 $("#non_profile_id").click(function(){
$("#not_profile_content").css("display", "block");
$("#profile_content").css("display", "none");
   });

   $("#unread_chat_id").click(function(){
$("#unread_chat_content").css("display", "block");
$("#read_chat_content").css("display", "none");
$(".unread_message").css("display", "none");

   });

  $("#read_chat_id").click(function(){
$("#unread_chat_content").css("display", "none");
$("#read_chat_content").css("display", "block");


   });




 });

   