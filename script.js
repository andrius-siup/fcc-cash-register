"use strict"

const LOOKUP = {
  PENNY: 1,
  NICKEL: 5,
  DIME: 10,
  QUARTER: 25,
  ONE: 100,
  FIVE: 500,
  TEN: 1000,
  TWENTY: 2000,
  "ONE HUNDRED": 10000
}

// cid = cash-in-drawer
function checkCashRegister(price, cash, cid) {
  // store variable with amount of change due
  const changeDue = cash - price;
  let changeDueCents = changeDue * 100;
  // console.log(changeDue);
  // console.log(changeDueCents);

  // sum up all the money in the cash drawer
  const available = cid.reduce((acc, billType) => {
    //console.log(billType);
    return acc + billType[1] * 100;  // return in cents
  }, 0);
  // if the money in the cid is not enough, return 
  // {status: "INSUFFICIENT_FUNDS", change: []}
  // if (available < changeDueCents) {
  //   return {status: "INSUFFICIENT_Funds", change: []};
  // }
  // console.log(available);
  

  // if the money in the cid is equal to the change due, return
  // {status: "CLOSED", change: [...]}
  if (available === changeDueCents) {
    return {status: "CLOSED", change: cid};
  }
   // Reverse the cid, loop through, and add up for each billType, 
  // the amount of money needed for that billType
  const change = cid.reverse().map(([name, amount]) => {
    // Loop while the change due is more than the value on the bill type, and the amount of money for that bill type is sufficient
    //console.log(amount);
    let total = 0;
    const nameValue = LOOKUP[name];
    // console.log(name, nameValue);
    let amountCents = amount * 100;
    while (nameValue <= changeDueCents && amountCents > 0) {
      // Add one bill's worth to the total
      total += nameValue;
      // Subtract that nameValue from the total change due
      changeDueCents -= nameValue;
      // Subtract that nameValue from how much money of that bill type is available
      amountCents -= nameValue;
    }
    return [name, total / 100];
    // Filter out change compartments that are not bigger than zero
  }).filter(([, amount]) => amount > 0);
 
  //console.log(change);
  
  const changeTotal = change.reduce((acc, [, amount]) => {
    return acc + amount;
  }, 0.00);

  // console.log(changeTotal);

  if (changeTotal < changeDue) {
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }

  return {status: "OPEN", change: change}
}

// console.log(checkCashRegister(19.5, 20, [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100],
// ]));

// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

