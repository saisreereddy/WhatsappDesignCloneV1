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
$('#profile_content').show('slide', {direction: 'left'}, 500);
   });


 $("#non_profile_id").click(function(){
  $("#profile_content").css("display", "none");
$('#not_profile_content').show('slide', {direction: 'right'}, 500);

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

   function test(clickedID){

     document.getElementById("chat_content").style.display = "block";
     document.getElementById("no_chat_content").style.display = "none";
     if ($("#"+clickedID).hasClass("unread_message_div")) {
  document.getElementsByClassName('unread_message')[clickedID-1].style.display="none";
}


      //append the markup to the DOM
     


var arr = [
        { fname : "Saiteja", imagesource:"Images/pic1.jpg", receiver : "hello", sender: "hey ssup?",receiver1:"Got a job",sender1:"Yay",receiver2:"Hey,have you finished up the edwisor project"},
        { fname : "Rohit", imagesource:"Images/r.png", receiver : "hey", sender: "hey ssup?",receiver1:"Nice Resume",sender1:"Thanks",receiver2:"please send your resume"},
        { fname : "Anand", imagesource:"Images/a.png", receiver : "Hi", sender: "hey ssup?",receiver1:"All THE BEST",sender1:"Thanks a lot",receiver2:"Had lunch?"},
        { fname : "Swarna", imagesource:"Images/s.png", receiver : "Hi whatsup?", sender: "ntng as such?",receiver1:"Best of luck",sender1:"Thanks a lot",receiver2:"How are you?"},
        { fname : "Divya", imagesource:"Images/d.jpg", receiver : "Had dinner", sender: "ya",receiver1:"you",sender1:"ya had",receiver2:"Got admit in NUS:)"},
        { fname : "Tejasvi", imagesource:"Images/t.png", receiver : "what doing", sender: "games",receiver1:"good",sender1:"hmm",receiver2:"Off to US!!!"},
        { fname : "Manasa", imagesource:"Images/m.png", receiver : "Hello", sender: "hi",receiver1:"All THE BEST",sender1:"Thanks a lot",receiver2:"Please provide the info"},
        { fname : "Siddharth", imagesource:"Images/s.png", receiver : "I had reservation", sender: "at what time",receiver1:"11:30",sender1:"cool",receiver2:"Hey there!"},
        { fname : "Abhi", imagesource:"Images/a.png", receiver : "Going home", sender: "cool",receiver1:"All THE BEST",sender1:"Thanks",receiver2:"Timings?"},
        { fname : "Ram", imagesource:"Images/r.png", receiver : "Hi", sender: "hey ssup?",receiver1:"You got scholarship",sender1:"Thanks a lot",receiver2:"When can i expect the call?"}
      ]
    
    for(i=0;i<=arr.length;i++)
    {
     

      if(i==clickedID)
      {
document.getElementsByClassName('heading-name-meta')[0].innerHTML = arr[i].fname;
document.getElementsByClassName('message-text')[0].innerHTML = arr[i].receiver;
document.getElementsByClassName('message-text')[1].innerHTML = arr[i].sender;
document.getElementsByClassName('message-text')[2].innerHTML = arr[i].receiver1;
document.getElementsByClassName('message-text')[3].innerHTML = arr[i].sender1;
document.getElementsByClassName('message-text')[4].innerHTML = arr[i].receiver2;

    document.getElementById("imagecoll").src=arr[i].imagesource;
    





      }
    }






    }
    


 


function small_screen_function()
{

if ($(window).width() >=200 && $(window).width() <= 700 ) { 



  document.getElementById("chat_content").style.display = "block";
     document.getElementById("not_profile_content").style.display = "none";




}



}
function small_screen_content()
{

if ($(window).width() >=200 && $(window).width() <= 700 ) { 



  document.getElementById("chat_content").style.display = "none";
     document.getElementById("not_profile_content").style.display = "block";




}



}
