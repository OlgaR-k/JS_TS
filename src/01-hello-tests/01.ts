
export function sum(a: number, b: number) {
    return a + b;
}
export function mult(a: number, b: number) {
    return a * b;
}

export function splitIntoWords(sentense: string) {
    const worsd =  sentense.toLowerCase().split(' ');
    console.log(worsd);
    const words2 = worsd.filter( w => w !== "" && w !== "-");
    console.log(words2);
    const result = words2.map( w => w.replace("!", ''))
    return result;
}