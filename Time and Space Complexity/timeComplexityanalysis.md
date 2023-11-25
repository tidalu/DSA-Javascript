```markdown
# Time Complexity analysis in Data structures and algorithms 

## What is the input size?
We define the input size as the total number of items present in the input. If we increase the input size, the total number of operations performed by an algorithm will increase. In other words, the time complexity taken by an algorithm will increase with the growth in the input size.

## What is running time?
The running time of an algorithm for a given input size depends on the number of operations executed. The greater the number of operations, the longer the running time of an algorithm.

## Types of algorithm used in algorithms
- Arithmetic operations: Addition(+), subtraction(-), multiplication(*), division(/), modulus(%)
- Relational operations: ==, !=, >, <, >=, <=
- Bitwise operations: &, |, ^, ~, <<, >>
- Logical operations: &&, ||, !
- Assignment operations: =, +=, -=, *=, /=, %=, <<=, >>=, &=, !=, ^=
- Increment/decrement operations: ++, --
- Control operations: Conditional statements like if else, function calls, return statements, unconditional statements like break etc.

## Critical assumption for the analysis of the algorithm
- We assume that each line of the algorithm takes the constant of Ci, even if they do not take the same time, we should assume that.
- Input data size is mostly huge in real-world applications, which lies in the range of million or billions, so we mostly analyze the algorithm for a large value input size.

## How can we determine the running time of the algorithm?
The answer depends on the code statements used in the algorithm, loops, recursive calls, conditional statements.

## Analysis of linear search
```python
int linearSearch(int X[], int n, int k) 
{
    for(int i = 0; i < n; i++)
    {
        if(x[i] == k) {
            return i
        }
    }
}
```
It runs in the size of the array to compare each element with k. If in the middle it finds the proper one, it returns that index, but if not it goes all the way till the end of the array it means n times.

## Worst case analysis of linear search
```python
int linearSearch(int X[], int n, int k)  
{
    for(int i = 0; i < n; i++) // C1 time * n
    {
        if(x[i] == k) {        // C2 time * n
            return i           // C3 time
        }                                        
    }

    return -1                  // C4 time
}
```
The worst case running time of linear search is the sum of the time taken by each line of the code, which is C1*n + C2*n + C3 + C4 = (C1+C2) * n + (C3+C4) = an + b. Here, a = (C1+C2) and b = (C3 + C4). So, the worst case of the linear function is an + b. Note: here C3 value is 0, because it is a falsy value, which means it does not run.

## Analysis of finding max value in an array
```python
int findMax(int x[], int n)
{
    int max = x[0]
    for(int i = 0; i < n ; i++) 
    {
        if(x[i] > max) 
            max = x[i]
    }

    return max ;
}
```
We initialize a variable max with the first element of x[] and run a loop to compare the remaining values with max. At each iteration, when x[i] > max, we update max with x[i]. By the end of the loop, the maximum value gets stored in the variable max, and we return this as an output.

## Popular time complexities in algorithms

### Constant time complexity: O(1)
Such time complexity appears when our algorithm performs a constant number of operations. The time complexity does not depend on the input size, i.e., regardless of the input size, the algorithm will have the same runtime. For example, the following situations have O(1) time complexity:
- Loop or recursion that runs a constant number of times.
- If the algorithm does not contain a loop in an array, find the minimum value in the mid heap, searching elements in the hash table [O(1) average], finding median in a sorted array, swapping two variables, etc.

### Logarithmic time complexity: O(logn)
A logarithm is the inverse of exponentiation. For example, logn with base 2 means the number of times n must be divided by 2 to get 1. Such time complexity appears when the input size decreases by some constant factor (mostly by half) at each step. In such a scenario, the algorithm will execute the O(logn) number of operations for the input size n.

Best examples:
Binary search, divide and conquer solutions similar to binary search, Euclid algorithm to find gcd, matrix exponentiation method of finding nth Fibonacci, searching in a balanced BTS or Trie, deleting minimum from mid-heap, etc.

## Linear complexity
Such time complexity appears when we need to process each input in O(1) time. Such time complexity occurs in a single loop, or multiple single loops. Sometimes we also find such time complexity in recursive algorithms when we access each element and perform a constant operation at each recursion step.

Best examples: Find the max element in an array, Kadane algorithm of maximum sub-array sum, merging two sorted arrays, partition algorithm in quicksort, BFS and DFS traversals in a binary tree.

## Log-linear time complexity: O(nlogn)
Such time complexity appears in the situation of divide and conquer algorithms, where we divide the problem into more than one independent subproblems, and perform O(logn) and at each level we perform O(n) operations.

Best examples: Merge sort, quick sort, divide and conquer algorithm of finding the max subarray sum, heapsort, finding the shortest path in a graph.

## Quadratic time complexity: O(n^2)
Nested loop algorithms, brute force approach.

Best examples: Bubble sort, insertion sort, transpose of a matrix.

## Exponential time complexity: O(2^n)
It happens when an algorithm has to explore all possible scenarios of input. Examples of such algorithms include:
- Finding all possible subsets of the input elements. For example, the subsets of {1,2, 3} are: {1}, {2}, {3}, {1, 2}, {1, 3}, {3, 2} and {1,2,3}.
- Finding all the permutations of input elements {1, 2, 3}, {1, 3, 2}, {2, 1, 3}, {2, 3, 1}, {3, 1, 2}, {3, 2, 1}.
- Finding all possible solutions to optimization problems in dynamic programming.

## Steps to calculate the time complexity and compare the efficiency of algorithms
1. Count the total number of critical operations performed by all the algorithms with respect to the input size.
2. Then ignore the lower order terms and coefficients and represent them in the form of Big O.
3. Finally, we compare the higher order term present in the Big O notation and decide on the efficient algorithm.
```