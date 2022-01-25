function selectionSort(arr, comparator) {
    if (typeof comparator !== 'function') {
        comparator = (a, b) => a > b;
    }

    for (let i = 0; i < arr.length - 1; i++) {
        let least = i;

        for (let j = i; j < arr.length; j++) {
            if (comparator(arr[least], arr[j]) > 0) {
                least = j;
            }
        }

        if (i !== least) {
            const temp = arr[i];
            arr[i] = arr[least];
            arr[least] = temp;
        }
    }

    console.log(arr);
    return arr;
}


selectionSort([4, 20, 12, 10, 7, 9]);
selectionSort([0, -10, 7, 4]);
selectionSort([1, 2, 3]);
selectionSort([]);

var nums = [
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
    32,
];
selectionSort(nums);
var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strComp(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    }
    return 0;
}
selectionSort(kitties, strComp);
const moarKittyData = [{
    name: 'LilBub',
    age: 7
}, {
    name: 'Garfield',
    age: 40
}, {
    name: 'Heathcliff',
    age: 45
}, {
    name: "Blue",
    age: 1
}, {
    name: "Grumpy",
    age: 6
}];
function oldestToYoungest(a, b) {
    return b.age - a.age;
}
selectionSort(moarKittyData, oldestToYoungest)