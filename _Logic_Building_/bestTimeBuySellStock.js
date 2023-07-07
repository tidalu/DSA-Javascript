/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var decreasing = true;
    var buy = 0;
    for(var i = 0; i < prices.length-1; i++){
        if(prices[i] > prices[i+1]){
            decreasing = false
            buy = prices[i+1]
            break;
        }
    }
    if(decreasing){
        return 0;
    }else {
        return buy;
        // for(var i = 0; i < prices.length-1; i++){
        //     if(prices[i] > prices[i+1]){
        //         decreasing = false
        //     }
        // }
    }
};

// unfinished

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))
console.log(maxProfit([2, 4, 1]))