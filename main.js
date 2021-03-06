var cat=0;
var dog=0;

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('',modelReady);
}

function modelReady(){
   classifier.classify(gotResults);   
}

function gotResults(error , results){
   if(error){
       console.error(error);
   }
   else{
       console.log(results);
       random_number_r = Math.floor(Math.random()*255) + 1;
       random_number_g = Math.floor(Math.random()*255) + 1;
       random_number_b = Math.floor(Math.random()*255) + 1;

       document.getElementById("detected").innerHTML= "Detected Dog - "+dog+" , Detected Cat - " +cat;
       document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

       document.getElementById("animal_voices").innerHTML= "Detected Voice Is Of - " +results[0].label;
       document.getElementById("animal_voices").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

      img= document.getElementById("animal_image");

      if(results[0].label == "Barking"){
          img.src="barking.gif";
          dog= dog + 1;
      }
      else{
          img.src="meow.gif";
          cat= cat + 1;
      }
     }
}