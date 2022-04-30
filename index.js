// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    let driversArray = [];
    driversArray.push(drivers[0]);
    driversArray.push(drivers[1]);
    console.log(driversArray);
    return driversArray;
}

const returnLastTwoDrivers = function(drivers){
    let driversArray = [];
    driversArray.push(drivers[drivers.length-2]);
    driversArray.push(drivers[drivers.length-1]);
    console.log(driversArray);
    return driversArray;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function(fare) {
        return multiplier*fare;
    }
}

function fareDoubler(fare) {
    const huh = createFareMultiplier(2);
    return huh(fare);
}

function fareTripler(fare) {
    const huh1 = createFareMultiplier(3);
    return huh1(fare);
}

function selectDifferentDrivers(drivers, otherFunction) {
    return otherFunction(drivers);
}