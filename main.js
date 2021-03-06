Webcam.attach('#camera');

camera = document.getElementById("camera");
      
  Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
} 
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/JACkTMciY/model.json',modelLoaded);
function check(){
  img=document.getElementById("selfie_image")
classifier.classify(img,gotresult)
}
function modelLoaded() { console.log('Model Loaded!'); }
function gotresult(error,results){
  if(error){
    console.log(error)
  }
  else{
    console.log(results)
    document.getElementById("thanos").innerHTML=results[0].label
    document.getElementById("kratos").innerHTML=results[0].confidence

  }
}