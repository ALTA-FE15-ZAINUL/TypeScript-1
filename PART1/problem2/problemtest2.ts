function hadsDragonr(dragonHead: number[], knightHeight: number[]) {
  let heightSum = 0;

  let newDragon = dragonHead.sort((a, b) => a - b);
  let newKnight = knightHeight.sort((a, b) => a - b);

  if (newKnight.length <= newDragon.length) {
    console.log("knight fall");
    return;
  }

  for (let i = 0; i < newDragon.length; i++) {
    for (let j = 0; j < newKnight.length; j++) {
      if (newDragon[i] <= newKnight[j]) {
        heightSum += newKnight[j];
        break;
      }
      if (j == newKnight.length - 1) {
        console.log("knight fall");
        return;
      }
    }
  }
  if (heightSum == 0) {
    console.log(heightSum);
    return;
  }
  console.log(heightSum);
  return;
}

hadsDragonr([5, 4], [7, 8, 4]); //11
hadsDragonr([15, 10], [5]); //knight fall
hadsDragonr([7, 2], [4, 3, 1, 2]); //knight fall
hadsDragonr([7, 2], [2, 1, 8, 5]); //10
