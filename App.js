
var msg = document.getElementById("msg")
var height = parseFloat(prompt('Enter your height'));
var weight = parseFloat(prompt('Enter your weight'));
    function BMICalculator(){ 
var bmi = weight / (height * height);
var bmiRound = Math.round(bmi);
bmiRound = Math.floor(bmiRound);


// var output = `your BMI calculator is ${bmiRound}`
// console.log(output)
if(bmiRound < 18.5){
  var   output = "your BMI is" + bmiRound + "mass" + "you are cureently underweight";
}
else if(bmiRound < 18.5 && bmiRound <= 24.9){
 var output = "your BMI is" + bmiRound + "mass" +  " your have normal weight";
}

else if(bmiRound >=25 && bmiRound <= 29.9){
    var output = "your BMI is" + bmiRound + "mass" + "you are cureently overwieght";
}

else if(bmiRound >= 30){
   var  output = "your BMI is" + bmiRound + "mass" + "you are obese";
}
return output
}
 var bmiCal = BMICalculator();
 msg.innerHTML = bmiCal;

// IBMcalculator(65,1.8);
// second Question
var Text = document.getElementById("Text")
var age = 16;
var accompanied = true;
function movie(){
   
if (age >=13 && accompanied === true){
    var output2 = "You are allowed in, but will not see the movie.";
}
else {
    var output2 = "You are not allowed in";
}
    return output2;
}
Text.innerHTML = movie()

  

  