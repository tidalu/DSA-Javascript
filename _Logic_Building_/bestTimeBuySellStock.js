/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit_ = function (prices) {
    if (prices.length == 0) {
        return 0
    }
    // var max = Math.max(...prices);
    var min = Math.min(...prices)

    // console.log('Min', min)
    // var indexMax = prices.indexOf(max);
    var indexMin = prices.indexOf(min) + 1;
    // console.log('IndexMin', indexMin)
    // if(indexMin<indexMax){
    //     console.log('condition is true')
    //     return max - min;
    // }
    var newArr = prices.slice(indexMin);
    // console.log(newArr)

    if (newArr.length !== 0) {
        var max = Math.max(...newArr);
        var profit = max - min;
        return profit;
    } else if (newArr.length == 0) {
        prices.pop();
        return maxProfit(prices);
    }


    // if (prices.length > 1) {
    //     newArr.pop();
    //     return maxProfit(newArr);
    // } else {
    //     return 0;
    // }
};
//

// second version

var maxProfit_ = function (prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;
};




// third vay 

function maxProfit(prices) {
    var  min = prices[0];
    var  max = 0

    for (let i = 1; i < prices.length; i++) {
        min = Math.min(min, prices[i])
        max = Math.max(max, prices[i] - min)
    }

    return max
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]))//5
console.log(maxProfit([7, 6, 4, 3, 1]))//0
console.log(maxProfit([2, 4, 1]))//2
console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]))// 2
console.log(maxProfit([3, 2, 6, 5, 0, 3])) // 4
