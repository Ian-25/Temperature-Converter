function calculateTip(billTotal, tipPercentage) {
    return (billTotal * tipPercentage) / 100;
}

console.log("Tip for $50 at 15%:", "$" + calculateTip(50, 15));
console.log("Tip for $100 at 20%:", "$" + calculateTip(100, 20));
console.log("Tip for $75.50 at 18%:", "$" + calculateTip(75.50, 18)); 
