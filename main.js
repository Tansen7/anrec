dog=0;
cat=0;
cow=0;
lion=0;
startClassification() 
{
    navigator.mediaDevices.getUserMedia({audio: true});
    ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/iwUiXyeKT/')
}
modelReady()
{
    classifier.classify()
}
gotResults()
{
    if (error) {
        console.log(error); 
    } else {
        console.log(results);
        red=Math.floor(Math.random()* 255) + 1;
        green=Math.floor(Math.random()* 255) + 1;
        blue=Math.floor(Math.random()* 255) + 1;
        document.getElementById("number_sounds_detected").innerHTML = 'I can hear - '+
        results[0].label;
        document.getElementById("name_of_audio").innerHTML = 'Detected voice of - '+
        (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("number_sounds_detected").style.color = "rgb("     
+red+","+blue+","+green+")";
document.getElementById("name_of_audio").style.color = "rgb("
+red+","+blue+","+green+")";
    } 
}