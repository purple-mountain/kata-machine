export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;
    while (high > low) {
        let middle = Math.floor((low + high) / 2);
        let element = haystack[middle];
        if (element === needle) return true;
        else if (element > needle) high = middle;
        else low = middle + 1;
    }
    return false;
}
