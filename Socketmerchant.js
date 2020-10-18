function socketMerchant(n,ar){
    let socks={};
    let pairs=0;
    for(let element of ar){
        socks[element]=socks[element]+1 || 1;
            if(socks[element]%2==0){
                pairs+=1;
            }
    }
    return pairs;
}
var pair=socketMerchant(17,[10,10,10,10,20,30,30,30,30,30,30,30,40,40,40,40,40]);
console.log("The total number of matching pairs of socks that rohit can sell  is "+pair);