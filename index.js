const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

//Calculating the totalBatteries using reduce
const totalBatteries = batteryBatches.reduce((accumulator, currentBatch) => accumulator + currentBatch, 0);

console.log(totalBatteries);