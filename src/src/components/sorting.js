export function insertionSort(arr) {
    console.log('INITIAL ARR', arr)
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j].forca < key.forca) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key
    }
    console.log('Sorted:', arr)
    return arr;
}

export function bubbleSort(arr) {
    console.log('INITIAL ARR:', arr)
    let swap;
    do {
        swap = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].pontos > arr[i + 1].pontos) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swap = true;
            }
        }
    } while (swap);
    console.log('ARR:', arr)
    return arr
}

export function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        let min = i; //  index do menor elemento
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[min].pts < arr[j].pts) {
                min = j; // atualiza o index do menor
            }
        }
        if (i !== min) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    console.log(arr)
    return arr
}

// n log n
export function shellSort(arr) {
    let n = arr.length;
    let h = n / 2;
    var c, j;
    while (h > 0) {
        for (var i = h; i < n; i++) {
            c = arr[i];
            j = i;
            while (j >= h && arr[j - h] > c) {
                arr[j] = arr[j - h];
                j = j - h;
            }
            arr[j] = c;
        }
        h = h / 2;
    }
}

export function quickSort(origArray) {
    if (origArray.length <= 1) {
        return origArray;
    } else {

        var left = [];
        var right = [];
        var newArray = [];
        var pivot = origArray.pop();
        var length = origArray.length;

        for (var i = 0; i < length; i++) {
            if (origArray[i] <= pivot) {
                left.push(origArray[i]);
            } else {
                right.push(origArray[i]);
            }
        }

        return newArray.concat(quickSort(left), pivot, quickSort(right));
    }
}