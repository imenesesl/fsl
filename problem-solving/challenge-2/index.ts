const isValidNumber = (diceNumber: number) => diceNumber >= 1 && diceNumber <= 6

export const diceFacesCalculator = (
  dice1: number,
  dice2: number,
  dice3: number
): number => {
  if (!isValidNumber(dice1) || !isValidNumber(dice2) || !isValidNumber(dice3)) throw new Error('Dice out of number range')
  let result: number;
  // same
  if (dice1 === dice2 && dice2 === dice3) result = dice1 * 3
  // 2 equals
  else if (dice1 === dice2) result = dice1 * 2
  else if (dice1 === dice3) result = dice1 * 2
  else if (dice2 === dice3) result = dice2 * 2
  // no equals
  else result = Math.max(dice1, dice2, dice3)
  return result;
};
