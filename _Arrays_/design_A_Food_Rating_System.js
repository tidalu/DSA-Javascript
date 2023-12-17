// /**
//  * @param {string[]} foods
//  * @param {string[]} cuisines
//  * @param {number[]} ratings
//  */
// var FoodRatings = function (foods, cuisines, ratings) {
//   let i = 0;
//   let n = foods.length;
//   for (let j = 0; j < foods.length; j++) {
//     this[foods[j]] = [cuisines[j], ratings[j]];
//   }
// };

// /**
//  * @param {string} food
//  * @param {number} newRating
//  * @return {void}
//  */
// FoodRatings.prototype.changeRating = function (food, newRating) {
//   this[food][1] = newRating;
// };

// /**
//  * @param {string} cuisine
//  * @return {string}
//  */
// FoodRatings.prototype.highestRated = function (cuisine) {
//   let result = [];
//   for (const [food, [c, rating]] of Object.entries(this)) {
//     if (c === cuisine) {
//       result.push([food, rating]);
//     }
//   }

//   if (result.length === 0) {
//     return null;
//   }

//   result.sort((a, b) => {
//     const ratingDiff = b[1] - a[1];
//     return ratingDiff !== 0 ? ratingDiff : a[0].localeCompare(b[0]);
//   });

//   return result[0][0];
// };

// var FoodRatings = function (foods, cuisines, ratings) {
//   this.highestRatedFood = {};
//   for (let j = 0; j < foods.length; j++) {
//     this[foods[j]] = [cuisines[j], ratings[j]];
//     if (
//       !this.highestRatedFood[cuisines[j]] ||
//       ratings[j] > this.highestRatedFood[cuisines[j]][1] ||
//       (ratings[j] == this.highestRatedFood[cuisines[j]][1] &&
//         foods[j] < this.highestRatedFood[cuisines[j]][0])
//     ) {
//       this.highestRatedFood[cuisines[j]] = [foods[j], ratings[j]];
//     }
//   }
// };

// /**
//  * @param {string} food
//  * @param {number} newRating
//  * @return {void}
//  */
// FoodRatings.prototype.changeRating = function (food, newRating) {
//   if (this[food]) {
//     let cuisine = this[food][0];
//     this[food][1] = newRating;
//     if (
//       newRating > this.highestRatedFood[cuisine][1] ||
//       (newRating == this.highestRatedFood[cuisine][1] &&
//         food < this.highestRatedFood[cuisine][0])
//     ) {
//       this.highestRatedFood[cuisine] = [food, newRating];
//     }
//   }
// };

// /**
//  * @param {string} cuisine
//  * @return {string}
//  */
// FoodRatings.prototype.highestRated = function (cuisine) {
//   return this.highestRatedFood[cuisine]
//     ? this.highestRatedFood[cuisine][0]
//     : null;
// };

// new try
var FoodRatings = function (foods, cuisines, ratings) {
  this.foods = foods;
  this.cuisines = cuisines;
  this.ratings = ratings;
};

/**
 * @param {string} food
 * @param {number} newRating
 * @return {void}
 */
FoodRatings.prototype.changeRating = function (food, newRating) {
  for (let i = 0; i < this.foods.length; i++) {
    if (food == this.foods[i]) {
      this.ratings[i] = newRating;
    }
  }
};

/**
 * @param {string} cuisine
 * @return {string}
 */
FoodRatings.prototype.highestRated = function (cuisine) {
  let highestRated = 0;
  let name = [];
  for (let i = 0; i < this.cuisines.length; i++) {
    if (this.cuisines[i] == cuisine && highestRated <= this.ratings[i]) {
      if (highestRated < this.ratings[i]) {
        highestRated = this.ratings[i];
        name = [this.foods[i]];
      } else {
        name.push(this.foods[i]);
      }
    }
  }
  name.sort();
  return name[0];
};

/**
 * Your FoodRatings object will be instantiated and called as such:
 */
var obj = new FoodRatings(
  ['kimchi', 'miso', 'sushi', 'moussaka', 'ramen', 'bulgogi'],
  ['korean', 'japanese', 'japanese', 'greek', 'japanese', 'korean'],
  [9, 12, 8, 15, 14, 7]
);
// console.log(obj);
obj.changeRating('sushi', 16);
var param_2 = obj.highestRated('japanese');
console.log(param_2);
