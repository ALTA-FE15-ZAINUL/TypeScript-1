function acronym(phrase: string) {
  const input = phrase.split(" ");
  const output = input.map((name) => name.charAt(0).toUpperCase()).join("");

  return output;
}
console.log(acronym("Portable Network Graphics")); //PNG
console.log(acronym("Correct me if I'm wrong")); //CMIIW
console.log(acronym("Thanks god It's Friday")); //TGIF
