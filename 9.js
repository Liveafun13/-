const countU = (str) => {
    let result = "";
    let chrs = 0;
    for(let i = 0; i < str.length; i++) {
        if(result.indexOf(str[i]) === -1) {
            result += str[i];
            chrs++;
        }
    }
return chrs;
}

let str = "you know nothing jhon snow";
console.log(countU(str));

export default countU;