// Instructions:
// The profit or loss amount is calculated by subtracting the cost price from the selling price:
// Profit/Loss = selling price - cost price
// Calculate the amount and return:
// 1. "Profit" if the result is positive.
// 2. "Loss" if the result is negative.
// 3. "Break-even" if the result is zero.
// Example:
// For this input sellingPrice = 50, costPrice = 30, the result should be: "Profit"
// Reason: Subtracting cost price 30 from selling price 50 gives us a profit of 20.

function calculateProfitLoss(sellingPrice, costPrice) {
  const result = sellingPrice - costPrice;
  if (result > 0) {
    return "Profit";
  } else if (result < 0) {
    return "Loss";
  } else {
    return "Break-even";
  }
}
