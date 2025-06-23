function fibonacci(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;

}


let fib;
const maximo = 100;

console.log("FUNCION FIBONACCI, números entreo 0 y 1000")
for (let i = 0; i <= maximo; i++) {
    fib = fibonacci(i);
  console.log("Fibonnaci " +i+ " : "+fib);
}
console.log("FUNCION FIBONACCI, números entreo 0 y 1000")

console.log("FUNCION FIBONACCI, números entreo 0 y 1000 PARES")
for (let i = 0; i <=maximo; i++) {
    if((i % 2)==0) { 
        fib = fibonacci(i);
        console.log("Fibonnaci " + i + " : " + fib);
    }
}
console.log("FUNCION FIBONACCI, números entreo 0 y 1000 PARES")

console.log("FUNCION FIBONACCI, números entre 0 y 1000 PARES")
for (let i = 0; i <=maximo; i++) {
    if((i % 2)==1) { 
        fib = fibonacci(i);
        console.log("Fibonnaci " + i + " : " + fib);
    }
}
console.log("FUNCION FIBONACCI, números entre 0 y 1000 IMPARES")
