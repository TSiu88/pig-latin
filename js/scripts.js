//Back-end Logic functions

//Check if alphanumeric or not
function letterCheck(word){
  var regex = /^[a-zA-Z]+$/;
  if (word.match(regex)){
    return true;
  } else{
    return false;
  }
}

//Check if letter is a vowel
function vowelCheck(letter1){
  letter1 = letter1.toLowerCase();
  if (letter1 === "a" || letter1 === "e" || letter1 === "i" || letter1 === "o" || letter1 === "u"){
    return true;
  }else{
    return false;
  }
}

//Check how many consonants in a row and change to pig latin
function consTranslate(text){
  var tempString = text.toLowerCase();
  var consecutiveIndex = 1;
  var letterArray = tempString.split("");

  if(text.length === 1){
    return text + "ay";
  }else if(tempString.charAt(0) === "y"){
    letterArray.shift();
    return letterArray.join("") + text.charAt(0) + "ay";
  }else{
    var foundVowel = false;
    for(var i=1; i<letterArray.length && !foundVowel; i++){
      if(!vowelCheck(letterArray[i])){
        consecutiveIndex++;
      }else{
        foundVowel = true;
        if(letterArray[i] === "u" && letterArray[i-1] === "q"){
          consecutiveIndex++;
        }
      }
    }
    
    var startLetters = text.slice(0, consecutiveIndex);
    var endLetters = text.slice(consecutiveIndex);
    return endLetters + startLetters + "ay";
  }
}

//Front-end Logic
$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();

    var inputText = $("#paragraph").val();

    var isALetter = letterCheck(inputText);
    if (isALetter){
      var firstLetter = inputText.charAt(0);
      if (vowelCheck(firstLetter)){
        inputText = inputText + "way";
        console.log("is vowel " + inputText);
      }else{
        var translateText = consTranslate(inputText);
        console.log("is constanant " + translateText);
      }
    }else{
      console.log("not a letter");
    }

  });
});