const findTheOldest = function(people) { 
    let oldestPerson = people[0];
    let oldestAge; 
    if (Object.hasOwn(people[0], "yearOfDeath")) {
        oldestAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth; 
    } else {
        oldestAge = 2024 - oldestPerson.yearOfBirth; 
    }
    for (let i = 1; i < people.length; i++) {
        let age; 
        if (Object.hasOwn(people[i], "yearOfDeath")) {
            age = people[i].yearOfDeath - people[i].yearOfBirth; 
        } else {
            age = 2024 - people[i].yearOfBirth; 
        }
        if (age > oldestAge) {
            oldestAge = age; 
            oldestPerson = people[i];
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
