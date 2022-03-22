
// cid = cash-in-drawer
function checkCashRegister(price, cash, cid) {
  // store variable with amount of change due
  const changeDue = cash - price;
  // console.log(changeDue);
  // sum up all the money in the cash drawer
  const available = cid.reduce((acc, billType) => {
    //console.log(billType);
    return acc + billType[1];
  }, 0);
  console.log(available);
  // if the money in the cid is not enough, return 
  // {status: "INSUFFICIENT_FUNDS", change: []}
  
  let change;
  return change;
}

console.log(checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]));

