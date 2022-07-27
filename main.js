// List of Words
let wordBank = ["baseball", "week", "reason", "rifle", "sign", "hateful", "efficacious", "shiny", "uneven", "shop", "aboard", "pocket", "modern", "quaint", "placid", "certain", "instinctive", "escape", "year", "money"];

let random;
let max = wordBank.length;
// Populating random index
function findRandom() 
{
    random = Math.floor(Math.random() * (max - 1));
    return random; 
}
// Calling random index function
findRandom();
//Populating random word from array
let word = wordBank[random];
// Creating h2 variables
let h2;
let h2_part2;
// Adding word to website
let wordHTML = document.getElementById('word');
for (let i = 0; i < word.length; i++)
{
    h2 = document.createElement('h2');
    h2.appendChild(document.createTextNode(word[i]));
    h2.style.display = "none";
    wordHTML.appendChild(h2);
}
// Adding strikes to website
let strikes = document.getElementById('strikes');
let strikeWord = 'HANGMAN';
for (let i = 0; i < strikeWord.length; i++)
{
    h2_part2 = document.createElement('h2');
    h2_part2.appendChild(document.createTextNode(strikeWord[i]));
    h2_part2.style.display = "none";
    strikes.appendChild(h2_part2);
}
// Adding an event listener to listen for a click on the letters
let letters = document.getElementsByClass('col-sm');
letters.addEventListener('click', letterClick);
// Handling the click on the letter
function letterClick(e)
{
    for (let i = 0; i < word.length; i++)
    {
        if (e.target.value == word[i])
        {
            e.target.style.textDecoration = "line-through";
            e.target.style.textDecorationColor = "red";
            h2.style.display = "visible";
        }
        else
        {
            e.target.style.textDecoration = "line-through";
            e.target.style.textDecorationColor = "red";
            h2_part2.style.display = "visible";
        }
    }
}
// Making box variable
let box = document.getElementById('message');
// Checking if word is shown
let all_wordletters_seen = 0;
for (let i = 0; i < word.length; i++)
{
    if (h2.style.display == "visible")
    {
        all_letters_seen++;
    }
}
// Checking if strikes is shown
let all_strikeletters_seen = 0;
for (let i = 0; i < strikeWord.length; i++)
{
    if (h2_part2.style.display == "visible")
    {
        all_strikeletters_seen++;
    }
}
// Displaying congratulatory message
if (all_letters_seen == word.length)
{
    box.style.display = "visible";
    box.appendChild(document.createTextNode("Congratulations! You have guessed all the letters correctly!"));
}
// Displaying losing message
if (all_strikeletters_seen == strikeWord.length)
{
    box.style.display = "visible";
    box.appendChild(document.createTextNode("You Lost! You have run out of guesses:("));
}
