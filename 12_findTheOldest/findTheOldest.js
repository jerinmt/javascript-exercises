const findTheOldest = function(objectList) {
    const currentYear = (new Date()).getFullYear();
    const ordered = objectList.sort((a,b) => ((a.yearOfDeath||currentYear)-a.yearOfBirth)>((b.yearOfDeath||currentYear)-b.yearOfBirth)? -1 : 1);
    return ordered[0];
};

// Do not edit below this line
module.exports = findTheOldest;
