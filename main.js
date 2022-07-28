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
let word = wordBank[random].toUpperCase();
// Creating h2 variables
let h2;
let h2_part2;
// Adding word to website
let wordHTML = document.getElementById('word');
for (let i = 0; i < word.length; i++)
{
    h2 = document.createElement('h2');
    h2.appendChild(document.createTextNode(word[i]));
    h2.style.visibility = "hidden";
    // h2.style.textDecoration = "underline";
    wordHTML.appendChild(h2);
}
// Adding strikes to website
let strikes = document.getElementById('strikes');
let strikeWord = 'HANGMAN';
for (let i = 0; i < strikeWord.length; i++)
{
    h2_part2 = document.createElement('h2');
    h2_part2.appendChild(document.createTextNode(strikeWord[i]));
    h2_part2.style.visibility = "hidden";
    strikes.appendChild(h2_part2);
}
// Adding an event listener to listen for a click on the letters
let letters = document.getElementsByTagName('p');
for (let i = 0; i < letters.length; i++)
{
    letters[i].addEventListener('click', letterClick);
}
// Making list of letters in word
let elements_in_word = document.querySelectorAll('#word > h2');
let letters_in_word = [];
for (let i = 0; i < elements_in_word.length; i++)
{
    letters_in_word[i] = elements_in_word[i].textContent;
    // console.log(letters_in_word);
}
// console.log(letters_in_word);
let elements_in_strike = document.querySelectorAll('#strikes > h2');
let letters_in_strike = [];
for (let i = 0; i < elements_in_strike.length; i++)
{
    letters_in_strike[i] = elements_in_strike[i].textContent;
}
// Handling the click on the letter
// Counter for indexing through strikes
let j = 0;
// Making box variable
let box = document.getElementById('message');
box.style.display = "none";
// Checking if word is shown
let all_wordletters_seen = 0;
// Checking if strikes is shown
let all_strikeletters_seen = 0;
function letterClick(e)
{
    // Check if letter clicked is in inside word
    if (letters_in_word.includes(e.target.textContent))
    {
        // console.log("Within");
        for (let i = 0; i < letters_in_word.length; i++)
        {
            if (e.target.textContent == letters_in_word[i])
            {
                e.target.style.textDecoration = "line-through";
                e.target.style.textDecorationColor = "green";
                // console.log("Correct");
                elements_in_word[i].style.visibility = "visible";
                all_wordletters_seen++;
                // console.log(all_wordletters_seen);
            }
        }
    }
    else
    {
        e.target.style.textDecoration = "line-through";
        e.target.style.textDecorationColor = "red";
        // console.log("Incorrect");
        elements_in_strike[j].style.visibility = "visible";
        j++;
        all_strikeletters_seen++;
        // console.log(all_strikeletters_seen);
    }
    // console.log(letters_in_word.length);
    // Displaying congratulatory message
    if (all_wordletters_seen == letters_in_word.length)
    {
        box.style.display = "flex";
        box.appendChild(document.createTextNode("Congratulations! You have guessed all the letters correctly!"));
        // console.log("Inside");
    }
    // Displaying losing message
    if (all_strikeletters_seen == letters_in_strike.length)
    {
        box.style.display = "flex";
        box.appendChild(document.createTextNode("You Lost! You have run out of guesses:("));
        // console.log("Insidew2");
    }
}
// for (let i = 0; i < elements_in_word.length; i++)
// {
//     if (elements_in_word[i].style.visible == "visible")
//     {
//         all_wordletters_seen++;
//     }
// }

// for (let i = 0; i < elements_in_strike.length; i++)
// {
//     if (elements_in_strike[i].style.visibility == "visible")
//     {
//         all_strikeletters_seen++;
//     }
// }
