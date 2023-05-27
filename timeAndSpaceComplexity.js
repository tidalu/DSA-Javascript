
// what is time complexity?

    // in every interview after writing your code you will be asked what is the time complexity of the program and what is the space complexity of it

    //  Time complexity !== time taken


    // old widnows              // new macbook


    //  okay here, if we have 10{input} macbook can take 1 sec and windows can take 2 sec
    // input 20 - macbook 2 sek windows 4 sec
    // here time complexity is the rat between the increasing time takens. 
    
    // TC -> BigO notation
    // every types of code takes time in terms of big O notation
    // O() it is expressed like this

    // ex  

    for(var i = 0; i < 5; i++) {
        console.log(i);
    }  /// for this, actually it does 15 operation in each iteration 3 tasks increment, check, consle
    // so O(15)  but normally big o is  not represented by number

    // if we change the 5 to N, how many times will this loop run?
    // N times right? so as tree operation in each iteration, Time Complexity will be O(n*3)

    // first step is initializing
    // second step is comparising
    // third step is consoling
    // fourth is increment
    // again comparing fifth
    // again consoling six
    // seven increment 


    // Main rules of Time Complexity
        // === always compute in the worst case scenario
            // best case
            // average case
            // worst case
            var mark;
            if(mark < 25) return 'grade D'
            else if(mark <  45) return 'grade C'
            else if(mark < 65) return 'grade B'
            else return 'grade A'

            // okay if we input here mark 10 it will do only one operation so O(2)  this is the best case cuz it takes the least time

            // but if we input 70 it will do 4 operationg it will tree times check and finnally return grade a so TC will be O(4)  -- it is the best case cuz it takes the most time, and always we should take the worst case when we calculate the TC , 


        // === avoid constants

        // O(4N^3 + 2N^2 + 8)#
        // here if we are give 10^5 for N then when we calculate the the expression, we will get very huge number, and +8, no matter how much large input we get for N, 8 wont be changed, it is constant, and when we get very huge numbers + 8, actually adding 8 is  not very significant, so we don't count it !

        // === avoid lower values 
        // what does it mean by this, if we look at ht problem above there is 2 * N^2, when we assume N = 10^5  then we e=in the end add 4*10^15 + 2*10^10 + 8, as 8 does not have any significance also 2*10^10 does not have also, it is slight near to the largest one but it is lover anyway so, we should ignore it also
        

        // except Big O notation there are also Theta notation and Omega Notation

        // 1. Big O ->  worst case --- upper bound
        // 2. Omega -> lower bound -- the best case
        // 3. Theta -> average case

        // finding Big O notation exercises
        
        for(var i = 0; i < N; i++ ) {
            for(var j = 0; j < N; j++){
                // [ some block of code]{ it is takeing const type}
            } 
        }

        //  for every iteration of i > nested loop is iterated from 1 to the end (N) it will be repeated for all i ; so from every side loop is being iterated N time so N*N  and time complexity will be O(N^2)


        // 

        for(i = 0; i < F; i++){
            for(j = 0; j <= i; j++){
                // some code 
            }
        }
        //  O(N*N)

        // okay let's solve this, 

        //  when i = 0; { j = 0}
        // i = 1; {j = 0, 1}
        // i = 2;  { j = 0, 1, 2}
        // ...
        // i = N-1 {j = 0, 1, 2 ... N-1}

        // so we can say it is being looped (1+2+3+4+5 ... + N)

        // as we know we do have a formula to calculate the sum of N numbers

        // N(N+1)/2 => n^2/2 + n/2  // this is the exact time complexity but we do know those three rules so we can here avoid lover values so time complexity will be O(N^2/2) >  and even if we take the const 1/2 then we will have time complexity 0(N^2)

        // ======================
        // space complexity
            // def: auxiliary space{ the space that you take to solve the problem} + Input space{ the space tht you take to store the input} 

            // imagine we will be given a and b variables , and we will have c var to calculate the sum of the two a and b above, here we use auxiliary space to solve the c = a + b , and to store a and b we use input space cuz they are given by the user, even if we assign their values it does not matter

            // one strict rule, if we are given a and b, never do b = a + b; never reassign the input, or never do an operation on input, cuz it might be used in another places , even though it might be saving the space, but it will goes you to be rejected


        // memory space
        //  for this even we will be use Big o notation

        // cp  code -> server
        // most of the servers take 1s = [we can do] 10^8 operations
        // 2s ===> 2*10^8
        // 3 ===> 3*10^8
