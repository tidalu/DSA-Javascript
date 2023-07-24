# Iteration Vs Recursion

Recursion and Iteration are both used for a similar objective : to execute a sequential set of instructions repeatedly.

However , there are some major difference between them functionally

Iteration and recursion are key Computer Science techniques used in creating algorithms and developing software 


---

## Iteration

It allows the execution of a sequential set of statements repetitively using  conditional loops.

There are loops with control variable that need to be initialized, incremented or decremented  and a conditional control statement that continuously gets checked for the termination of execution.
The value of the control variable continuously approached the value in the conditional statement.

A control variable stored the value , which is then updated, monitored, and compared with the conditional statement.

Infinite loops keep utilizing CPU cycles until w stop their execution manually.

The execution of iteration is comparatively faster.

-> requires more code to handle the iteration
-> could be implemented bounded (ex: `post.each { |post| ... }`)
-> iteration can also be bounded (ex: `loop { ... }`)
-> bounded iterations are less likely to end up in infinite loops unlike bounded loops
-> unbounded loops, like recursion, requires an exit condition(or break condition)
-> code is more efficient w.r.t recursive code 


Let's look at couple more popular iterative approaches:
    1. Increment approach using single and nested loop
    2. Two pointers and sliding window approach
    3. Problem solving using hash tables, stacks, queues, priority queues, etc.
    4. BFS traversal of tree and graph
    5. Bottom-up approach of DP 
    6. Iterative backtracking using stack
    7. Greedy approach
---

## Recursion

Recursion is usually much slower because all functions must be stored in a stack to allow the return back to the caller functions. In many cases, memory has to be allocated and copied to implement scope isolation.

Some optimizations like tail call optimization, make recursion faster but are not always possible, and are not implemented in all languages.

The main reason to use recursion are
-> that it is more intuitive in many cases when it mimics our approach of the problem
-> that some data structures like trees are easier to explore using recursion(or would need stack in any cases)

Of course every recursion can be modeled as a kind of loop: that is what CPU will ultimately do. And the recursion itself , more directly , means putting the function calls and scopes in a stack. But changing your recursive algorithm to a looping one might need a lot of work and make your code less maintainable : as for every optimization, it should only be attempted when some profiling or evidence showed it to be necessary.

It is not actually "usually slower": it 's recursion that is applied incorrectly that is slower. On top of that, modern compilers are good at converting some recursions to loop without even asking
 --> 
A statement in the function's body calls the function itself.

A recursive function must compare of at leas on base case, i.e. a condition for termination of execution

The function keeps on converging to the defined vase case as it continuously calls itself.

Stack memory is used to store the current state of the function

if there is no base  defined , recursion causes a stack overflow error.

The execution of recursion is comparatively slower.

-> requires less code 
-> code turns out to be easy to follow and understand 
-> requires a base case condition to break the recursion
-> Shortcomings in base condition can result in infinite repetition
-> Higher time complexity relative to iterative code
-> Large overhead w.r.t. iteration when it comes to computing and memory

Let's look at couple more popular recursive approaches:
    1. Decrease and conquer
    2. Divide and conquer
    3. DFS traversal of tree and graph
    4. Recursive backtracking 
    5. Top-down approach of DP 
    6. Exhaustive search

### Types of Recursion

> Direct recursion
    Indirect recursion, functions calls themselves. This process comprises a single-step recursive call by the function from within its own body. This means that the function appears as a part of the function’s definition, and the function calls itself in order to perform its task.
    Example: 
        ```
            function countdown(number) {
                if (number <= 0) {
                    console.log("Blastoff!");
                } else {
                    console.log(number);
                    countdown(number - 1); 
                }
            }
        ```
> Proc and Cons of direct recursion
    **Proc** -> it is often simper to write and understand direct recursive function, as the base case and the recursive case are clearly defined within the same function.

    Additionally, In certain scenarios, using direct recursion can lead to improved efficiency., as it avoids the overhead of calling an additional function

    **Cons*** -> it may present greater difficulty to debug direct recursive functions, as the call stack can become very large and likely become difficult to trace the execution of the function. more, direct recursion can consume a large amount of memory if the recursion is not terminated properly, as each recursive call adds a new layer to the call stack.

    Overall , it is vital to thoughtfully evaluate the balance between simplicity, efficiency, and debugging when deciding whether to use direct recursion in a given situation.



> Indirect recursion
    Indirect recursion is where a function calls another function to call original function. Meaning , function f1 calls a new function f2 and f2 calls the initial function f1 in return. This is a two-step recursive process as the function calls another function to make a recursive call.

    Example: 
        ```
            function isEven(numb) {
                if(numb == 0) return true;
                return isOdd(numb - 1)
            }
            function isOdd(numb) {
                if(numb == 0) return true;
                return isEven(numb - 1;)
            }
        ```

> Proc and Cons of the indirect recursion
    **Proc**: One advantage of indirect recursion is that it is often easier to understand and debug, as the base case and the recursive case are defined in separate functions.
    Additionally, indirect recursion can lead to improved efficiency in certain cases, as it allows for modular structure and can reduce the size of the call stack

    **Cons**: it can be more complex to write and understand, as the logic is split between two functions. Additionally, indirect would consume more memory in some cases, as it requires the creation of additional function calls

> Tail recursion
    A function is said to be a tail-recursive if no operations are pending when the recursive function returns to its caller.

    such functions, immediately return the return value from the calling function.
    Iti si a efficient method  as compared to others, as the stack space required is less and even compute overhead will get reduced.

    Example: 
        ```
            function fibonacci(n, current = 0, next = 1) {
                if( n == 0 ) {
                    return current;
                }

                // the recursive call is the last operation and it is in tail position.
                return fibonacci(n-1, next, current + next)
            }
        ``` 

> Non-tail Recursion
    Non tail recursion is a recursive function in which the first statement is a recursive call followed by other operations

    It is also known as Head recursion.
    Non-tail recursion does not perform any operations throughout the recursive calling process. Instead, all operations are completed at the time of return.

    Example:  
    ```
        function fun(n)
        {
            if (n > 0) {
  
            // First statement in the function
            fun(n - 1);
  
            document.write(" "+ n);
            }
        }

    ```


---

## Difference

These are some key differences between Recursion and Iteration:

-> a conditional statement decides the termination of recursion, while a control variable's value decides the termination of the iteration statement ( except in the case of a while loop)

-> Endless recursion can lead to a system crash, whereas infinite Iteration consumes CPU cycles

-> recursion repeatedly invokes the mechanism, as a result, this can be expensive regarding processor time and memory space, whereas Iteration does not .

-> Recursion makes code smaller, on the other hand , Iteration makes it longer.

- sometimes a coding problem can be solved using both iteration and recursion, but the choice of approach often depends on the nature of the problem and which one is more intuitive to use.
    --> for example, recursion is often more natural for algorithms such as binary search, merge sort, quick sort, DFS traversal of a graph, etc. Similarly, approaches like backtracking and data structures like trees are often easier to understand using recursion. 

    --> On the other hand, many coding problems are more straightforward to solve using iteration. Recursive solutions may be challenging or impossible to understand in these cases. For example. insertion sort, heap sort, and BFS traversal of a graph or tree are often more efficiently Implemented using iteration.



> CPU cycles 
    - Recursion : Smaller that iterations
    - Iteration: Bigger than Recursion

> Implementations
    - Recursion: Implemented by a function calling itself 
    - Iteration: Implemented using loops 

> State
    - Recursion: Defined  by parameter values kept in the stack 
    - Iteration: Defined by control variable value 

> Speed
    - Recursion: Quit slower than Iteration due to the overhead of function calls and   control shift from one function to another
    - Iteration: it is faster because an iteration does not use the stack 

> Time complexity 
    - Recursion: High time complexity 
    - Iteration: Generally, it has lower time complexity. Its time complexity is fairly easier to calculate by calculating the number of times the loop body gets executed

> Infinite loop
    - Recursion: If we do not provide base case(to terminate), this means that the code of recursion leads to infinite recursion.There is a chance that the system will crash( stack overflow error ). 
    - Iteration: if the control of the iteration statement never becomes false, iteration will be infinite. On the other hand , if it is stuck on an infinite loop, then it repeatedly uses the CPU cycle.

> Memory 
    - Recursion: More memory needed  because the recursive function stores all the steps in a memory stack.
    - Iteration: require less memory 

---

## When and Where?

The most common question is that when to use recursion and when to use Iteration. Honestly most codes can be written with both. However, recursion is intuitive for many situations, whereas iterations is quite tough for others.

Simply put, if you notice a pattern in your problem, you should use recursion. For example Fibonacci, tree and graph questions. Also, recursion uses more memory but is sometimes clearer and more readable. Using loops increases performance, but recursion can sometimes be more better for the programmers.

So, we should go with the approach that seems intuitive, not too complex and easily convey pur thought process. However when performance and efficiency need to be considered then choose accordingly, so in Summary: 
    1: Recursive functions are often slower than iterative functions. So , if speed is  a concern, iteration is usually used.
    
    2: if the stack limit is to restrictive, iteration will be preferred over recursion.

    3:  Some methods are almost unmanageable iteratively but are quite naturally programmed recursively. The choice is apparent in this case.


# Example

Imagine you wanted to calculate the factorial of an integer (i.e a whole number) n (written n!). To calculate a factorial we take the number , n, and multiply it by all of the integers between 1 and n. SO 2! , for example 2x1 = 2, 3!= 3x2x1 = 6 etc. How would you calculate this using program?

The most obvious way for most people would be to use an iterative method - that is, to loop through all the integers from 1 to n, multiplying ass we go along. Certainly, that would work, and here is the code you could use to do it:

Javascript iterative way: 
    ```function factorial(n) {
        var answer = 1, 
            i;

        for(i = 1; i <= n; i++) {
            answer *= i;
        }

        return answer;
    }```
---

Python iterative way: 
```def factorial(n) {
        answer = 1
        for loop in range(1, n+1):
            answer *= loop
        return answer
    }```

Now, that works perfectly, but A cleaner and more elegant solution would be to use recursion here

For every factorial other than 0!(answer: 1), we can see that n! = n x (n - 1)!, i.e. each factorial is the product of itself and the preceding one, so that 2! = 2 x 1!, 3! = 3 x 2!, 4! = 4 x 3!, etc.

Let's see below how we would solve in recursive way:

Javascript recursive: 

``` function factorial(n) {
    if( n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}  ```

---

Python recursive:

```def factorial(n) 
    if n == 0: 
        return 1
    else 
        return n * factorial( n - 1 )
```

As you can see, the recursive approach is not only easier to follow, but requires fewer lines of code, and no variables, rather than the two that the iterative method uses.
