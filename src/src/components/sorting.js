export function insertSort(arr){
    console.log('INITIAL ARR', arr)
    let len = arr.length;
    for(let i = 1; i < len; i++){
        let key = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j].forca < key.forca){
            arr[j+1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key
    }
    console.log('Sorted:',arr)
    return arr;
}

export function bubbleSort(arr){
    var swap;
    let n = arr.length - 1;
    let x = arr;
    do{
        swap = false;
        for(let i=0; i < n; i++){
            if(x[i] < x[i+1]){
                let temp = x[i];
                x[i] = x[i+1];
                x[i+1] = temp;
                swap = true;
            }
        }
        n--;
    } while(swap);
    console.log('Arr:',x)
    return x;
}