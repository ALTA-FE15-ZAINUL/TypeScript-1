function decrytAtbash(text: string): string {
  const teks = "abcdefghijklmnopqrstuvwxyz";
  const teks1 = "zyxwvutsrqponmlkjihgfedcba";
  const teks3 = text.toLowerCase();

  let result = "";
  for (let i = 0; i < teks3.length; i++) {
    const char = teks3[i];
    const index = teks.indexOf(char);
    if (index === -1) {
      result += char;
    } else {
      result += teks1[index];
    }
  }

  return result;
}

console.log(decrytAtbash("Olivn rkhfn wloli hrg znvg")); //lorem ipsum dolor sit amet
console.log(decrytAtbash("Svool dliow! R'n ovzimrmt gbkvhxirkg!")); //hello world! i'm learning typescript!
console.log(decrytAtbash("Gsv jfrxp yildm ulc qfnkh levi gsv ozab wlt")); //the quick brown fox jumps over the lazy dog
