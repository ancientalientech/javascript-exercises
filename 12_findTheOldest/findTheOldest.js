const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        let oldestAge;
        let personAge;
        const currentYear = (new Date()).getFullYear();
        if (!oldest.yearOfDeath) {
            oldestAge = currentYear - oldest.yearOfBirth;
        } else {
            oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        }

        if (!person.yearOfDeath) {
            personAge = currentYear - person.yearOfBirth;
        } else {
            personAge = person.yearOfDeath - person.yearOfBirth;
        }

        if (oldestAge > personAge) {
            return oldest;
        } else {
            return person;
        }
    })
};

// Do not edit below this line
module.exports = findTheOldest;
