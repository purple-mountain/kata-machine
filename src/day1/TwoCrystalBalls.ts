export default function two_crystal_balls(breaks: boolean[]): number {
    let jmpDist = Math.floor(Math.sqrt(breaks.length));
    let i = jmpDist;
    for (; i < breaks.length; i += jmpDist) {
        if (breaks[i]) {
            break;
        }
    }

    i -= jmpDist;

    for (let j = 0; j < jmpDist; j++, i++) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}
