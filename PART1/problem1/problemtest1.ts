function eEquations(a: number, b: number, c: number) {
  let result = Math.max(a, b, c);

  for (let x = 1; x <= result; x++) {
    for (let y = 1; y <= result; y++) {
      for (let z = 1; z <= result; z++) {
        if (
          x + y + z === a &&
          x * y * z === b &&
          x ** 2 + y ** 2 + z ** 2 === c
        ) {
          console.log(x, y, z);
          return;
        }
      }
    }
  }
  console.log("No solutions");
}

eEquations(1, 2, 3);
eEquations(6, 6, 14);
