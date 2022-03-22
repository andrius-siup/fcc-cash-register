
// cid = cash-in-drawer
function checkCashRegister(price, cash, cid) {
  // store variable with amount of change due
  const changeDue = cash - price;
  const changeDueCents = changeDue * 100;
  // console.log(changeDue);
  // console.log(changeDueCents);

  // sum up all the money in the cash drawer
  const available = cid.reduce((acc, billType) => {
    //console.log(billType);
    return acc + billType[1] * 100;  // return in cents
  }, 0);
  if (available < changeDueCents) {
    return {status: "INSUFFICIENT_Funds", change: []};
  }
  console.log(available);
  // if the money in the cid is not enough, return 
  // {status: "INSUFFICIENT_FUNDS", change: []}
  
  let change;
  return change;
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

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

