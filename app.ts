function multiply ({ a, b = 25 }: { a?: any; b?: number; } = {}){
    if(!b){
        b=25
    }
    return a * b; 

}
console.log(multiply({ a: 5 }));
console.log(multiply({ a: 5, b: 35 }));       