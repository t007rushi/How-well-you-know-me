console.log("--------WELCOME TO MYBUDDY QUIZ-----");
console.log("How well you know me? QUIZ");
console.log("\n")
var que1 = "I'm DC or Marvel fan?";
var que2 = "What is my birthyear ?";
var que3 = "Which city I did My graduation?";
var que4 = "My favourite marvel hero?";
var que5 = "my favorite color?";
maxscore = 0
var list = [que1,que2,que3,que4,que5]
var ans = ["marvel","1999","nagpur","thor","black"]
score =0
var readline = require("readline-sync");

for(var i=0;i<list.length;i++){
  var q = readline.question(list[i] + "\n");
  var a = ans[i]
  if(q.toUpperCase() == a.toUpperCase()){
    console.log("You Are Correct!!! ");
    score +=1
  }
  else{
    console.log("Wrong buddy!!!")
    console.log("It's  "+ a );
    // score-=1
  }
  // console.log(q);
}

var topper = [top1=
  {name:"",
  scorem :""
  },top2 ={
    name:"",
  scorem :""
  }
]
console.log("Your Score is:",score)
// cons
if(score>=3){
  console.log("BHAI Hai TU MERA")
}
// if(maxscore<score){
//   maxscore = score
//   topper.top1.name =maxscore

// }

// console.log(topper.top1)