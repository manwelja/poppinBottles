const poppinBottles = function(investment) {
 
  const bottlesBought = Math.floor(investment / 2);
  //Object to hold quanities of bottles and caps seperately, set to 
  //our initial purchase
  const poppinObj = {
    totBottles: bottlesBought,
    remBottles: bottlesBought,
    remCaps: bottlesBought,
    earnBottles: 0,
    earnCaps: 0
  };
  let totBottles = 0;
  
  //lets go to the store
  offToTheStore(poppinObj);
   
  //Lets see how we did
  printResults(poppinObj);
  
  
  
};

const printResults = function(poppinStash) {
  console.log("TOTAL BOTTLES:", poppinStash.totBottles);
  console.log("REMAINING BOTTLES:", poppinStash.remBottles);
  console.log("REMAINING CAPS:", poppinStash.remCaps);
  console.log("TOTAL EARNED:");
  console.log(`\tBOTTLES:`, poppinStash.earnBottles);
  console.log(`\tCAPS:`, poppinStash.earnCaps);


}
const offToTheStore = function(poppinStash) {
  //Calculate how many bottles we can get via rememption
  let newFromBottles = Math.floor(poppinStash.remBottles / 2);
  let newFromCaps = Math.floor(poppinStash.remCaps / 4);
  let newBottles = newFromBottles + newFromCaps;

  //Add the new bottles and their caps to our stash AND
  //remove the bottles and caps that have been remeemed
  poppinStash.totBottles += newBottles;
  poppinStash.earnBottles += newFromBottles;
  poppinStash.earnCaps += newFromCaps;
  poppinStash.remCaps = newBottles + poppinStash.remCaps % 4;
  poppinStash.remBottles = newBottles + poppinStash.remBottles % 2;
  
  //If we still have enough left to remeem, come back!
  if (poppinStash.remBottles >= 2 || poppinStash.remCaps >= 4) {
    return newBottles + offToTheStore(poppinStash);
  }
  return 0;
};

// poppinBottles(10);
// poppinBottles(20);
// poppinBottles(30);
// poppinBottles(40);

poppinBottles(process.argv[2]);