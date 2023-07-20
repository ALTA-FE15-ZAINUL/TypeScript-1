function atbashCipher(text: string): string {
  const plainAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const cipherAlphabet = "zyxwvutsrqponmlkjihgfedcba";

  // Convert the input text to lowercase for consistency
  const lowercaseText = text.toLowerCase();

  let result = "";
  for (let i = 0; i < lowercaseText.length; i++) {
    const char = lowercaseText[i];
    const index = plainAlphabet.indexOf(char);

    // If the character is not present in the plain alphabet (e.g., special characters, numbers),
    // simply append it to the result as it is.
    if (index === -1) {
      result += char;
    } else {
      // Transpose the letter using the cipher alphabet
      result += cipherAlphabet[index];
    }
  }

  return result;
}

// Example usage:
const inputText = "Olivn rkhfn wloli hrg znvg";
const encryptedText = atbashCipher(inputText);
console.log(encryptedText); // Output: "Svool, Dliow!"
