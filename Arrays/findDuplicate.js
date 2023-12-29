let arr = [0,1, 2, 2, 3, 4, 5]

const seen = {};
const duplicates = [];
let count = 1

for (const value of arr) {
    if (seen[value]) { //it will check arr value is present in object
        duplicates.push(value);
        seen[value] = count + 1;
    } else {
        seen[value] = count;
    }
}
console.log(duplicates, seen);