function fact(num) {
    let r = 1;
    for(let i = 1; i <= num; i++) {
        r *= i;
    }
    return r;
}
console.log(fact(5));