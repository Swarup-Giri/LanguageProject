const seedrandom = require('seedrandom');
function fictionalLanguage(text) {
    const vowels = ["a", "e", "i", "o", "u"];
    const newVowels = ["á", "é", "í", "ó", "ú"];
    const words = text.split(" ");
    const newWords = [];
    const random = seedrandom('hello.');
  
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let syllables = [];
      let syllable = "";
  
      // Extract syllables
      for (let j = 0; j < word.length; j++) {
        let letter = word[j];
  
        if (vowels.includes(letter)) {
          syllable += letter;
        } else {
          syllables.push(syllable);
          syllable = "";
        }
      }
  
      syllables.push(syllable);
      syllables = shuffle(syllables, random);
  
      let newWord = "";
      let numSyllables = syllables.length;
  
      // Add diacritic to one vowel in the word
      let diacriticAdded = false;
      for (let j = 0; j < numSyllables; j++) {
        let syllable = syllables[j];
  
        for (let k = 0; k < syllable.length; k++) {
          let letter = syllable[k];
  
          if (vowels.includes(letter) && !diacriticAdded) {
            let index = vowels.indexOf(letter);
            newWord += newVowels[index];
            diacriticAdded = true;
          } else {
            newWord += letter;
          }
        }
      }
  
      // Add features to the new word
      let feature = "";
      if (word.length >= 5) {
        feature = word.slice(1, 4);
      } else if (word.length >= 3) {
        feature = word.slice(-2);
      }
  
      // Ensure no character is repeated more than three times
      let repeatedChar = false;
      for (let j = 0; j < newWord.length; j++) {
        let char = newWord[j];
  
        if (newWord.lastIndexOf(char) - newWord.indexOf(char) > 2) {
          repeatedChar = true;
          break;
        }
      }
  
      if (repeatedChar) {
        newWord = newWord.split("").sort().join("");
      }
  
      if (random() < 0.5) {
        newWord = feature + newWord;
      } else {
        newWord = newWord + feature;
      }
  
      newWords.push(newWord);
    }
  
    let result = newWords.join(" ");
  
    if (random() < 0.3) {
      result = result.toUpperCase();
    } else if (random() < 0.3) {
      result = result.toLowerCase();
    }
  
    return result;
  }
  
  function shuffle(array, random) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
console.log(fictionalLanguage("who was the first president of the United States of America"))