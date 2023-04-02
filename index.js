function scuberGreetingForFeet(miles){
  // Write your code here!
 
if (miles <= 400){
  return "This one is on me!"
}
else if (miles > 400 && miles < 2000){
  return "That will be twenty bucks."
}
else if (miles > 2000 && miles < 2500) {
  return "I will gladly take your thirty bucks.";
}
else if (miles > 2500) {
  return "No can do."
}
}

function ternaryCheckCity(city){
  // Write your code here!

const decision = city == "NYC" ?  "Ok, sounds good." : "No go.";
 return decision;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip){
    case "generous":
      return "Thank you so much.";
    break;
    case "not as generous":
      return "Thank you.";
    break; 
    default:
      return "Bye.";
    break; 
  }
}