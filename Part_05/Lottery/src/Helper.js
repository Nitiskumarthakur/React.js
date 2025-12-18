function genTricket(n){ // Number langth n size like n=3.
    let arr = new Array(n);
    for(let i=0;i<n;i++){
        arr[i] = Math.floor(Math.random()*10);
    }
    return arr;
}
function sum(arr){ // add using the reduce Method.
    return arr.reduce((sum, curr)=> sum + curr, 0);
}

export {genTricket, sum};