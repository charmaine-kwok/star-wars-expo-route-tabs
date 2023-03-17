function getRandom(min: number, max: number, exclude: number): number {
  let ranNum = Math.floor(Math.random() * (max - min)) + min;

  return ranNum === exclude ? getRandom(min, max, exclude) : ranNum;
}

export default getRandom;
