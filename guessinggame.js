


  const max = prompt("enter the maximum number");
  
  
  

  const random = Math.floor(Math.random() * max) +1;
 let guess = prompt("guess the number");
 while(true){
  if(guess == "quit"){
  console.log("sorry to see you quitting the game! good bye");
  break;
 } 
 
 if(guess == random){
  console.log("you won");
  break;
 } else if(guess < random){
  guess = prompt(" hint:your guess is too small, please try again ");
 }else{
  guess= prompt(" hint :your guess is too large try again"); 
 } 
 }
 