// Question 1
var msg = document.getElementById("msg");
function bmiCalculator(weight,height) {
    var weight = 65;
    var height = 1.8;
    var result;
    var bmi = weight/(height*height);
    var bmiRound = Math.round(bmi);
    if (bmiRound<18.5){
        result = "your BMI is" + bmiRound + "mass so you are underweight"
    }
else if( bmiRound >=18.9 && bmiRound<=24.9){
    result = "your BMI is" + bmiRound + "mass so you have nornal weight"
}
    else if(bmiRound>24.9){
        result = "your BMI is" + bmiRound + "mass so you are overweight"
    }
    return result;
}
var bmiCal =  bmiCalculator();
 msg.innerHTML = bmiCal;

//  Question 2
var Text = document.getElementById("Text")
function movie(age, accompained) {
    var age = 12;
    var accompained = true;
   var agelimit;
    if (age >=13 || accompained ==true){
        agelimit = `your are allowed to see the movie.`
    }
else{
 (age <= 12 && accompained == true)
        agelimit = `your age is ${age} you are not  allowed to see the movie.`

}
// console.log(agelimit)
return agelimit;
}
var watch =  movie();
Text.innerHTML = watch; 
    
