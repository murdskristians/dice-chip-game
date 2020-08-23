const utils = require("./utils");

test("should change the selected chip", () => {
  utils.selectedChip = 25;

  utils.changeSelectedChip(100);

  const result = utils.selectedChip;
  expect(result).toBe(100);
});

// ToDo: Figure out why selectedOptions is undefined
// test("should add a bet", () => {
//   utils.selectedChip = 25;
//   utils.balance = 100;

//   const optionNr = 1
//   utils.addBet(optionNr);

//   const result = utils.selectedOptions[optionNr].value;
//   expect(result).toBe(true);
// });

test("should double the bet", () => {
  utils.bet = 10;
  utils.repeatBet();
  expect(utils.bet).toBe(20);
});

test("should remove all bets", () => {
  utils.bet = 10;
  utils.undoBet();
  expect(utils.bet).toBe(0);
});

test("should show correct number of selected bet options", () => {
  utils.selectedOptions[1].selected = true;
  utils.selectedOptions[2].selected = true;

  const total = utils.totalSelected();
  expect(total).toBe(2);
});
