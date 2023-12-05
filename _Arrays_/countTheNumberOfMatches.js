/**
 * @param {number} n
 * @return {number}
 */

// first approach simulate : simulate 

// Intuition

// The problem description describes what happens at each round:

// If n is even, n / 2 matches are played and n / 2 teams play next round.
// If n is odd, (n - 1) / 2 matches are played and (n - 1) / 2 + 1 teams play next round.
// We can simply simulate the tournament according to the rules. We create a while loop that runs until n = 1.

// At each iteration, we check if n is even or odd. If n % 2 = 0, then n is even. Otherwise, n % 2 = 1 and n is odd. Here, % is the modulus operator.
// 
// If n is even, we add n / 2 to our answer and set n = n / 2.

// If n is odd, we add (n - 1) / 2 to our answer and set n = (n - 1) / 2 + 1.

// Algorithm 

// Initialize the answer ans = 0.
// While n > 1:
// If n % 2 == 0:
// Add n / 2 to ans.
// Set n to n / 2.
// Else:
// Add (n - 1) / 2 to ans.
// Set n to (n - 1) / 2 + 1.
// Return ans. 


// time complexity is : O(logn)
// at each step in while loop, we divid n or n -1  by two , n will reach 1 in approx log2n steps , we perform O(1) work at each step 

// space complexity : O(1)
// we are mot using any extra spaces

















var numberOfMatches = function(n) {
    var count = 0;
  
  while(n > 1) {
    if(n % 2 == 0) {
      count += n / 2
      n = n / 2
    } else {
      count += (n-1)/2
      n = (n-1)/2 + 1
    }
  }
  
  return count;
};

console.log(numberOfMatches(13))

// 

// second APproach : Logic

// instead of simulating the entire tournament , here we willdirectly consider the beginnning and the end of thetournament . 
//   in this tournament , when a team loses , they are eliminated and will no longer play any matches

/// ther are n teams and 1 winner , thus n-1 teams will be eliminated,

// ech match is played between two teams , one team wins ,n one team lkoses, thus each match eliminates exactly one team ,
// as n-1 teams will be eliminated, there will be n-1 matches played, with each match eliminating team, 

// Algrithm

// 1.Return n-1 

// time : O(1)

// space : O(1)

// code : 

var numberOfMatches2 = n => n - 1 ;