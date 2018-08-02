var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  var taxObj = {};

  for (var i = 0; i < salesData.length; i++){
    if (taxObj[`${salesData[i]['name']}`] === undefined){
      taxObj[`${salesData[i]['name']}`] = {};
    }
  }

  for (var t in taxObj) {
    console.log(t);

    taxObj[t].totalSales = 0;
    taxObj[t].totalTaxes = 0;

    for (var z = 0; z < salesData.length; z++){
      var province = salesData[z]['province'];
      if (salesData[z]['name'] === t){
        taxObj[t].totalSales += sumSales(salesData[z]['sales']);
        taxObj[t].totalTaxes += calculateTax(sumSales(salesData[z]['sales']), salesTaxRates[province]);
      }
    }
  }

  return taxObj;
}

function sumSales(array){
  var output = 0;
  for (var i = 0; i < array.length; i++){
    output += array[i];
  }
  return output;
}

function calculateTax(sales, taxRate) {
  var output = sales * taxRate;
  return output;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);
// console.log(salesTaxRates[0]);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/