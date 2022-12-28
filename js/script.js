const database = [
    {name:"John", country:"Israel", age:19, isMarried:true},
    {name:"Mary", country:"Israel", age:29, isMarried:false},
    {name:"Bill", country:"Belgium", age:10, isMarried:false},
    {name:"Jane", country:"France", age:30, isMarried:true},
    {name:"Hanna", country:"France", age:9, isMarried:false},
    {name:"George", country:"Israel", age:80, isMarried:true}
];

/*
1. Select and print all married person. (filter)
2. Print database sorted by age ASC. (min->max) (sort)
3. Calculate average age. (reduce)
4. Print statistic by country. {'Israel':3, ...}
5#. Print married person sorted ASC by name, not married DESC by
age and average age of married person.
6. Remove user by position.
*/

function filteredByMarried(array, married = true) {
    return array.filter(function (value) {
        if (value.isMarried === married) return value;
    });
}

function sortedByAge(array, isASC = true) {
    return array.sort(function (a, b) {
        return (isASC) ? a.age - b.age: b.age - a.age;
    });
}

function sortedByName(array, isASC = true) {
    return array.sort(function (a, b) {
        return (isASC) ? a.name > b.name: b.name > a.name;
    });
}

function averageAge(array) {
    return array.reduce(function (res, value, index) {
        return res + value.age;
    }, 0) / array.length;
}

function countryStat(array) {
    return array.reduce(function (res, value, index) {
        if (res[value.country] === undefined) {
            res[value.country] = 1;
        } else {
            res[value.country]++
        }
        return res;
    }, {});
}

function fiveWithSharp(array) {
    const sortedMarried = sortedByName(filteredByMarried(array), true);
    const sortedUnmarried = sortedByAge(filteredByMarried(array, false), false);
    return sortedMarried.concat(sortedUnmarried);
}

function removeUser(array, index) {
    array.splice(index, 1);
}


console.log(filteredByMarried(database));
console.log(sortedByAge(database));
console.log(averageAge(database));
console.log(countryStat(database));
console.log(fiveWithSharp(database));
console.log(removeUser(database, 3));
console.log(database);