/*

var dice = 
{
      sides: ["Regular", "Switch", "Fakie", "Nollie"],

      roll: function() 
      {
        var randomElement = sides[Math.floor(Math.random() * (sides.length - 1))];
        return randomElement;
      }
}
    
var button = document.getElementById('button');
    
function rollAndPrint()
{
      var result = dice.roll();
      printNumber(result);
}
    
function printText(text) 
{
      var placeholder = document.getElementById('placeholder');

      placeholder.textContent = text;
}

*/

var stances = ["Regular", "Switch", "Fakie", "Nollie"]

var spins = ["Backside", "Frontside", "", "", "", ""]

let rotations = ["", "180", "360", "180 shove", "360 shove", ""]

let flips = ["Kickflip", "Heelflip", "", "", "", ""]


document.getElementById("myButton").onclick = function()
{
      document.getElementById("stance").innerHTML = stances[Math.floor(Math.random() * stances.length)]
      document.getElementById("spin").innerHTML = spins[Math.floor(Math.random() * spins.length)]
      document.getElementById("rotation").innerHTML = rotations[Math.floor(Math.random() * rotations.length)]
      document.getElementById("flip").innerHTML = flips[Math.floor(Math.random() * flips.length)]
      
}