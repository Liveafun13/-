const getTotalA = (wallet, money) =>{
let result_num = 0;
  for(let i = 0; i < wallet.length; i++){
    let result_val = wallet[i];
    if(result_val.slice(0,3) === money){
      result_num += wallet[i].slice(3) * 1;
    }
  }
return result_num;
};

let arr = ["eur 10", "usd 1", "usd 10","rub 50", "usd 5"];

console.log(getTotalA(arr, "usd"))

export default getTotalA;