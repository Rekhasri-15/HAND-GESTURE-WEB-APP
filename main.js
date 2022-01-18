prediction_1=""
prediction_2=""
 Webcam.set(
 {
     width:350,
     height:300,
     image_format:'png',
     png_quality:100
 }
 );
 camera= document.getElementById("camera");

 Webcam.attach ('#camera');

 function take_snapshot()
 {
     Webcam.snap (function(data_uri) {
         document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
     });
 }

 console.log('ml5 version', ml5.version);
 
 classifier= ml5.imageClassifie('https://teachablemachine.withgoogle.com/models/-bbXxYEoz/.model.json',modelLoaded);


 function modelLoaded()
 {
     console.log('Model Loaded!');
 }

 function speak()
 {
     var synth = window.speechSynthesis
     speak_data_1=" The first prediction is " + prediction_1; 
     speak_data_2=" And the second prediction is " + prediction_2;
     var utterThis = new SpeechSynthesisUtterance (speak_data_1+speak_data_2);
     synth.speak(utterThis);
 }
    
 function check()
  {
      img=document.getElementById('captured_image');
      classifier.classify(img , gotResult);
  }
 function gotResult(error,results){
     if (error) {
         console.error(error);
     }
     else{
         console.log(results);
         document.getElementById("result_emotion_name").innerHTML=results[0].label;
         document.getElementById("result_emotion_name2").innerHTML=results[1].label;
         prediction_1=results[0].label;
         prediction_2=results[1].label;
         speak();
         if(results[0].label=="RIGHT")
         {
             document.getElementById("update_emoji").innerHTML="&#9754;";
         }

         if(results[0].label=="LEFT")
         {
             document.getElementById("update_emoji").innerHTML="&#9755;";
         }

         if(results[0].label=="RIGHT1")
         {
             document.getElementById("update_emoji").innerHTML="&#9756;";
         }

         if(results[0].label=="UP")
         {
             document.getElementById("update_emoji").innerHTML="&#9757;";
         }

         if(results[0].label=="LEFT1")
         {
             document.getElementById("update_emoji").innerHTML="&#128070;";
         }

         if(results[0].label=="DOWN")
         {
             document.getElementById("update_emoji").innerHTML="&#128071;";
         }
         if(results[0].label=="ROCK")
         {
             document.getElementById("update_emoji").innerHTML="&#128072;";
         }
         if(results[0].label=="PAPER")
         {
             document.getElementById("update_emoji").innerHTML="&#128073;";
         }
         if(results[0].label=="VICTORY")
         {
             document.getElementById("update_emoji").innerHTML="&#128075;";
         }
         if(results[0].label=="WRITING")
         {
             document.getElementById("update_emoji").innerHTML="&#128076;";
         }
         if(results[0].label=="UP1")
         {
             document.getElementById("update_emoji").innerHTML="&#128077;";
         }
         if(results[0].label=="DOWN1")DOWN1
         {
             document.getElementById("update_emoji").innerHTML="&#128078;";
         }
         if(results[0].label=="RIGHT2")
         {
             document.getElementById("update_emoji").innerHTML="&#128079;";
         }
         if(results[0].label=="LEFT2")
         {
             document.getElementById("update_emoji").innerHTML="&#128080;";
         }
         if(results[0].label=="HI")
         {
             document.getElementById("update_emoji").innerHTML="&#128400;";
         }
         if(results[0].label=="AMAZING")
         {
             document.getElementById("update_emoji").innerHTML="&#128406;";
         }
         if(results[0].label=="THUMBS UP")
         {
             document.getElementById("update_emoji").innerHTML="&#129304;";
         }
         


         if(results[0].label=="RIGHT")
         {
             document.getElementById("update_emoji2").innerHTML="&#9754;";
         }

         if(results[0].label=="LEFT")
         {
             document.getElementById("update_emoji2").innerHTML="&#9755;";
         }

         if(results[0].label=="RIGHT1")
         {
             document.getElementById("update_emoji2").innerHTML="&#9756;";
         }

         if(results[0].label=="UP")
         {
             document.getElementById("update_emoji2").innerHTML="&#9757;";
         }

         if(results[0].label=="LEFT1")
         {
             document.getElementById("update_emoji2").innerHTML="&#128070;";
         }

         if(results[0].label=="DOWN")
         {
             document.getElementById("update_emoji2").innerHTML="&#128071;";
         }
         if(results[0].label=="ROCK")
         {
             document.getElementById("update_emoji2").innerHTML="&#128072;";
         }
         if(results[0].label=="PAPER")
         {
             document.getElementById("update_emoji2").innerHTML="&#128073;";
         }
         if(results[0].label=="VICTORY")
         {
             document.getElementById("update_emoji2").innerHTML="&#128075;";
         }
         if(results[0].label=="WRITING")
         {
             document.getElementById("update_emoji2").innerHTML="&#128076;";
         }
         if(results[0].label=="UP1")
         {
             document.getElementById("update_emoji2").innerHTML="&#128077;";
         }
         if(results[0].label=="DOWN1")DOWN1
         {
             document.getElementById("update_emoji2").innerHTML="&#128078;";
         }
         if(results[0].label=="RIGHT2")
         {
             document.getElementById("update_emoji2").innerHTML="&#128079;";
         }
         if(results[0].label=="LEFT2")
         {
             document.getElementById("update_emoji2").innerHTML="&#128080;";
         }
         if(results[0].label=="HI")
         {
             document.getElementById("update_emoji2").innerHTML="&#128400;";
         }
         if(results[0].label=="AMAZING")
         {
             document.getElementById("update_emoji2").innerHTML="&#128406;";
         }
         if(results[0].label=="THUMBS UP")
         {
             document.getElementById("update_emoji2").innerHTML="&#129304;";
         }       
        }
 }
