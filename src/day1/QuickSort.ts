export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length);
}

function partition(arr: number[], low: number, high: number): number {
    const pivot = arr[high - 1];

    let idx = low - 1;

    for (let i = low; i < high - 1; i++) {
        if (arr[i] <= pivot) {
            idx++;
            const temp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = temp;
        }
    }

    idx++;
    arr[high - 1] = arr[idx];
    arr[idx] = pivot;

    return idx;
}

function qs(arr: number[], low: number, high: number): void {
    if (low >= high) {
        return;
    }

    const pIdx = partition(arr, low, high);

    qs(arr, low, pIdx);
    qs(arr, pIdx + 1, high);
}
