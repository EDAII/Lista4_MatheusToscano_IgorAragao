export function insertSort(arr) {
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
            if (arr[min].pontos < arr[j].pontos) {
                min = j; // atualiza o index do menor
            }
        }
        if (i !== min) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    return arr
}
