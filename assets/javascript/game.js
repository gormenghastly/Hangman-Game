var s;
var words = ["maze", "bounty", "ai", "android", "bicameral", "narrartive", "sweetwater", "frontier", "memories", "saloon"];
var guessedLetter = [];
var currentWordArray = [];
var currentWord = words[Math.floor(Math.random() * words.length)];
var remainLetters = currentWord.length;
var guessesLeft = 8;
var wins = 0;


document.onkeyup = function getWord() {

    resetGame();

    for (var i = 0; i < currentWord.length; i++) {
       currentWordArray[i] = "_";
    }
    s = currentWordArray.join (" "); 
    document.getElementById("current").innerHTML = s;  
    document.getElementById("press").innerHTML = "GUESS A LETTER"; 
    document.getElementById("guesses").innerHTML = "8";
    document.getElementById("wins").innerHTML = "0";

}  



function playGame() { 
 
        var guess = event.key.toUpperCase();

    if (remainLetters > -1) {
        for (var j = 0; j < currentWord.length; j ++) {
            if (currentWord[j] === guess) {
                currentWordArray[j] =  guess;    
            }
            document.getElementById("guesses").innerHTML = guess
        }
        if (remainLetters === -1) {
            wins ++;
            document.getElementById("wins").innerHTML = wins;
            document.getElementById("press").innerHTML = "YOU WIN! PRESS ANY KEY TO PLAY AGAIN."
        }  
        if (guessesLeft === 0)  {
            document.getElementById("press").innerHTML = "YOU LOSE! PRESS ANY KEY TO PLAY AGAIN."
        }
    }
    
}
    
   
function resetGame() {
    currentWord = "";
    guessesLeft = 8;
    guessedLetter = [];
    currentWordArray = [];
    document.getElementById("press").innerHTML = "PRESS ANY KEY TO PLAY" 
    document.getElementById("guesses").innerHTML = ""
    document.getElementById("wins").innerHTML = ""
}

    
    
        
            
                
            
                
            
           
        
    

        
    

    

   
       
    


    

