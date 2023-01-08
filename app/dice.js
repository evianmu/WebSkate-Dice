let dice = 
{
      sides: ["Regular", "Switch", "Fakie", "Nollie"],

      roll: function () 
      {
        let randomElement = sides[Math.floor(Math.random() * (sides.length - 1))];
        return randomElement;
      }
}
    
    
    
    
function printNumber(number) 
{
      let placeholder = document.getElementById('placeholder');

      placeholder.innerHTML = number;
}
    
let button = document.getElementById('button');
    
button.onclick = function() 
{
      let result = dice.roll();
      printNumber(result);
};
    
    