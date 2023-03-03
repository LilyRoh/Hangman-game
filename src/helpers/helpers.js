// Export a function called Check that takes three arguments:
// correct letters, wrong letters, and the target word to guess
export function Check(correct, wrong, word) {
  let status = 'win';

// Check for win: loop through each letter in the word, 
//and if the correct letters do not include the letter, set status to empty string
  word.split('').forEach(letter => {
    if(!correct.includes(letter)){
      status = '';
    }
  });
  
/// Check for lose:
// if the number of wrong letters is equal to 7 (the maximum number of incorrect guesses), set status to 'lose'
  if(wrong.length === 7) status = 'lose';

  return status
}