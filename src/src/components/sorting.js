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

export function bubbleSort(){

}