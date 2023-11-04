// var readlineSync = require("readline-sync");
// var firstName = readlineSync.question("First Name:");
// console.log("Hi " + firstName);


// var user_input = readlineSync.question("Am i greater than 25 ? : ");

// let score=0;
// if(user_input === "yes"){
//     console.log(firstName+ " You are correct");
//     score=score+5;
//     console.log(score);
// }
// else{
//     console.log(firstName+" u r not correct");
//     score=score-1;
// }

// var user_input2 = readlineSync.question("Am i working correctly ? : ");
// let ans2="no";

// if(user_input2 === ans2 ){
//     console.log(firstName+ " You are correct");
//     score=score+5;
//     console.log("your score is ", score);
// }
// else{
//     console.log(firstName+" u r not correct");
//     score=score-1;
// }

/////////////FUNCTIONS////////////////////////////
// var readlineSync=require("readline-sync");


// function cal(input1,input2){


//     let add= Number(input1) + Number(input2);
//     let sub= input1-input2;
//     let mul= input1*input2;
//     let div= input1/input2;

//     console.log("the addition is ",add)
//      console.log("the substarction is ",sub)
//     console.log("the multification is ",mul)
//     console.log("the devide is ",div)
// }

// input1=readlineSync.question("enter a number : ");
// input2=readlineSync.question("enter second number : ");
// let result =cal(input1,input2);

// for (var i=0;i<6;i++){
//     console.log("my mom is best")
// }
///

let readline=require("readline-sync");
let score=0;
let username= readline.question("wht is ur name ? ");
console.log("hi " + username  + " Lets playa game");

function play(question,answer){
    var useranswer=readline.question(question);
    if (useranswer === answer) {
        console.log("good that is correct ");
        score=score+1;
    }
    else{
        console.log("that is wrong ");
    }
     
      console.log("Your score is : ",score);
      console.log("-------------------")
}



var questions= [
    {  question:"Wher do i live : ", 
       answer:"Bangalore"
    },
    {  question:"What is my age : ", 
        answer:"23"
    },
    {  question:"What is my gender : ", 
       answer:"female"
    },

]

for(let i=0;i<questions.length;i++){
    let currentIndex=questions[i];
    play(currentIndex.question,currentIndex.answer);
    
}

console.log("This is your  fimal score",score);
