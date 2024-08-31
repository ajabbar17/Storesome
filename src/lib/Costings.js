function calculatePaperCost(type, width, height, gsm, quantity, wastage, ratePerKg,ups) {
    // Calculate the area of one sheet in square inches
    const areaPerSheet = width * height;
    
    // Depending on the type, the denominator in the formula will change (15500 for Card and 3100 for Paper)
    const denominator = (type === 'Card') ? 15500 : 3100;
    // Calculate the total weight in kg required
    const totalKgRequired = (areaPerSheet * gsm ) / denominator;
    const Rimsheets = (type === 'Card') ? 100 : 500;
    console.log(Rimsheets)
    // Calculate the cost per sheet based on the rate per kg
    const costPerSheet = (ratePerKg * totalKgRequired) / Rimsheets;

    // Add wastage to the quantity
    const totalQuantity = quantity + wastage;
    const totalsheets = totalQuantity/ups

    // Calculate the total cost for the required quantity
    const totalCost = costPerSheet * totalsheets;


    return {
        areaPerSheet: areaPerSheet,
        totalKgRequired: totalKgRequired,    
        costPerSheet: costPerSheet,
        totalQuantity: totalQuantity,
        totalCost: totalCost.toFixed(10)
    };
}

// Example usage:
const {areaPerSheet,totalKgRequired,costPerSheet,totalQuantity,totalCost} = calculatePaperCost('paper', 20, 30, 300, 1000, 50, 450,8);

console.log(`Area per Sheet: ${areaPerSheet} sq. inches`);

console.log(`Total Kg Required: ${totalKgRequired} kg`);

console.log(`Cost per Sheet: $${costPerSheet.toFixed(2)}`);

console.log(`Total Quantity: ${totalQuantity} sheets`);

console.log(`Total Paper Cost: $${totalCost}`);


function calculatePrintingCost({
    paperCost,
    printingCost,
    platesCost,
    dyeCutCost,
    cuttingCost,
    laminationCost,
    embossingCost,
    miscCost,
    totalPCs,
    profitMargin,
    dollarRate
}) {
    // Calculate the subtotal
    const subTotal = paperCost*2 + printingCost + platesCost + dyeCutCost + cuttingCost + laminationCost + embossingCost + miscCost;

    // Calculate the cost per piece
    const costPerPiece = subTotal / totalPCs;

    // Calculate the profit amount
    const profitAmount = costPerPiece * (profitMargin / 100);

    // Calculate the total amount including profit
    const totalAmount = costPerPiece + profitAmount;

    // Calculate the total order cost
    const totalOrderCost = totalAmount * totalPCs;

    // Convert to US Dollar based on the provided dollar rate
    const totalCostInUSD = totalOrderCost / dollarRate;

    return {
        subTotal: subTotal.toFixed(2),
        costPerPiece: costPerPiece.toFixed(2),
        profitAmount: profitAmount.toFixed(2),
        totalAmount: totalAmount.toFixed(2),
        totalOrderCost: totalOrderCost.toFixed(2),
        totalCostInUSD: totalCostInUSD.toFixed(2)
    };
}

// Example usage:
const printingCostDetails = calculatePrintingCost({
    paperCost: 6858.87,
    printingCost: 524.00,
    platesCost: 1000.00,
    dyeCutCost: 3500.00,
    cuttingCost: 200.00,
    laminationCost: 262.00,
    embossingCost: 524.00,
    miscCost: 1000.00,
    totalPCs: 1000,
    profitMargin: 25,
    dollarRate: 281 // Assuming 1 USD = 281 of local currency
});

console.log(`Total Order Cost in Local Currency: $${printingCostDetails.totalOrderCost}`);
console.log(`Total Order Cost in USD: $${printingCostDetails.totalCostInUSD}`);



function calculateShippingCost({
    totalWeight,
    dollarRate,
    isOverWeight,
    additionalChargesPerBox,
    shippingDestination // 'USA', 'UK', or 'Dubai'
}) {
    let shippingCost = 0;

    const shippingRates = {
        USA: [11000, 7500, 6550, 5500, 4500, 3650, 3450, 3150, 3000, 2900, 2850, 2600, 2500],
        UK: [6500, 1500, 1500, 1450],
        Dubai: [4500, 1000, 800, 750]
    };

    // Calculate Shipping Cost based on selected destination
    switch (shippingDestination) {
        case 'USA':
            if (totalWeight <= 1) {
                shippingCost = shippingRates.USA[0];
            } else if (totalWeight <= 2) {
                shippingCost = shippingRates.USA[1];
            } else if (totalWeight <= 3) {
                shippingCost = shippingRates.USA[2];
            } else if (totalWeight <= 4) {
                shippingCost = shippingRates.USA[3];
            } else if (totalWeight <= 5) {
                shippingCost = shippingRates.USA[4];
            } else if (totalWeight <= 6) {
                shippingCost = shippingRates.USA[5];
            } else if (totalWeight <= 9) {
                shippingCost = shippingRates.USA[6];
            } else if (totalWeight <= 19) {
                shippingCost = shippingRates.USA[7];
            } else if (totalWeight <= 24) {
                shippingCost = shippingRates.USA[8];
            } else if (totalWeight <= 50) {
                shippingCost = shippingRates.USA[9];
            } else if (totalWeight <= 65) {
                shippingCost = shippingRates.USA[10];
            } else if (totalWeight <= 75) {
                shippingCost = shippingRates.USA[11];
            } else {
                shippingCost = shippingRates.USA[12];
            }
            break;

        case 'UK':
            if (totalWeight <= 1) {
                shippingCost = shippingRates.UK[0];
            } else if (totalWeight <= 19) {
                shippingCost = shippingRates.UK[0] + (shippingRates.UK[1] * (totalWeight - 1));
            } else if (totalWeight <= 50) {
                shippingCost = shippingRates.UK[2] * totalWeight;
            } else {
                shippingCost = shippingRates.UK[3] * totalWeight;
            }
            break;

        case 'Dubai':
            if (totalWeight <= 1) {
                shippingCost = shippingRates.Dubai[0];
            } else if (totalWeight <= 19) {
                shippingCost = shippingRates.Dubai[0] + (shippingRates.Dubai[1] * (totalWeight - 1));
            } else if (totalWeight <= 50) {
                shippingCost = shippingRates.Dubai[2] * totalWeight;
            } else {
                shippingCost = shippingRates.Dubai[3] * totalWeight;
            }
            break;

        default:
            throw new Error('Invalid shipping destination selected');
    }

    // Add extra charges for oversized or overweight shipments
    if (isOverWeight) {
        shippingCost += additionalChargesPerBox;
    }

    // Convert to USD
    const totalShipping = shippingCost*totalWeight;
    const shippingCostInUSD = totalShipping / dollarRate;

    return {
        totalShipping,
        shippingCostInUSD: shippingCostInUSD.toFixed(2)
    };
}

// Example usage:
const shippingDetails = calculateShippingCost({
    totalWeight: 11, // example weight
    dollarRate: 281, // Assuming 1 USD = 281 of local currency
    isOverWeight: false, // change to true if the shipment is overweight or oversized
    additionalChargesPerBox: 15 * 281, // Additional charge converted to local currency
    shippingDestination: 'USA' // Select 'USA', 'UK', or 'Dubai'
});

console.log(`Shipping Cost: ${shippingDetails.totalShipping}`);
console.log(`Shipping Cost in USD: $${shippingDetails.shippingCostInUSD}`);
