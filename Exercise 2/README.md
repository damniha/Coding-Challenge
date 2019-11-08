# Google Interview

The question was about creating a function that takes 2 parameters: an **array** and **sum_result**.
Inside the given array you should find two numbers where their sum is equal to the sum_result.

***

## What to take into consideration

The program must execute with the least time and least memory. ***Time Complexity*** and ***Space Complexity*** are the keywords used to define the last sentence.

***

### Way of thinking:

The best way the candidate found was creating a hash array that stores the `sum_result - the element` inside.
After creating the hash_array, the function starts looking inside the main array for matching values. In this case, if it finds the same value that means that there are two numbers where their sum is equal to the
parameter given by the user. Otherwise, there is no solution.

***

# The full video can be found here
>
[![Google Question](https://comphonia.com/blog/uploads/interview1.jpg)](https://www.youtube.com/watch?v=XKu_SEDAykw "Google Question")
