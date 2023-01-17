var tags = ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div'];

var result = {};

for (var tag of tags) {
    result[tag] = result[tag] ? result[tag] + 1 : 1;
}
console.log(result)
console.log(Object.keys(result).sort((a, b) => result[b] - result[a]))


var list = [1, 2, 3, 4, 4, 2, 6, 6, 5, 8, 9, 12, 34, 34, 12, 67, 0, 0];

function maxNumber(numbers) {
    var getMax = numbers[0]
    for (var num of numbers) {
        getMax = getMax > num ? getMax : num
    }
    return getMax
}

console.log(maxNumber(list))