function calculatePrice() {
    const fullTariff = 10;
    const reducedTariffPrice = 8;

    age = parseInt(prompt("Please enter your age:"));

    if (age < 25) {
        return reducedTariffPrice;
    } else {
        return fullTariff;
    }
}

// Run the algorithm
const price = calculatePrice();
console.log("Price to pay:", price, "€");
