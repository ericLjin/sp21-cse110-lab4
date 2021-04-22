
# Part 1

## Part 1a

var
1. Line 9 prints "values added: 20"
2. Line 13 prints "final result: 20"

let
1. Line 9 prints "values added: 20"
2. Line 13 causes an error. The variable result is block scoped to the if-else block. Line 13 is not in this block, and so result is not defined there.

const
1. Line 9 causes an error. result is reassigned on line 7, which is not allowed because it was declared as a const variable.
2. Line 13 also causes an error, because result is reassigned on line 7.

## Part 1b

1. Line 12 prints the value of prices.length. This is because i is function scoped, and the value of i can be obtained anywhere within the function.
2. Line 13 prints the discounted price of the final element in the prices array.
3. Line 14 prints the discounted price of the final element, rounded to 2 decimal places.
4. Given an array of prices and a discount percentage, the function returns a separate array of the prices with the discount applied.
5. Line 12 will throw an error. i is defined within the block of the for-loop, and attempting to call i from outside of its scope, causes an error.
6. Line 13 also throws an error. discountedPrice is defined within the for-loop, and calling it in line 13 is out of scope.
7. Line 14 prints the discounted price of the final element in the prices array.
8. This function returns the same array as described in question 4; it is an array of prices with a discount percentage applied.
9. Line 11 throws an error. i is defined within the block of the for-loop. It is out of scope at line 11.
10. Line 12 prints the length of the prices array.
11. This function returns the same array as in questions 4 and 8 with 1 exception. All the prices in the array are not rounded to 2 decimal places.
12.
    A. student.name
    B. student['Grad Year']
    C. student.greeting
    D. student["Favorite Teacher"]["name"]
    E. student["courseLoad"][0]

13.
    A. '3' + 2 = '32'. This is due to string concatenation
    B. '3' - 2 = 1. The string 3 is treated as a number.
    C. 3 + null = 3. null is stored as the number 0.
    D. '3' + null = '3null'. Adding something to a string is concatenation
    E. true + 3 = 4. True is equal to the number 1, so this is addition.
    F. false + null = 0. False and null are both stored as the number 0.
    G. "3" + undefined = "3undefined". String concatenation.
    H. "3" - undefined = NaN. undefined does not have a numerical equivalent like null, so the result is NaN, or Not a Number.

14.
    A. '2' > 1. True, '2' is converted into a number for boolean comparison.
    B. '2' < '12'. False, the two strings are compared alphabetically, '2' does not come before '12', so the comparison is false.
    C. 2 == '2'. True, '2' is converted to the number 2.
    D. 2 === '2'. False, the two elements being compared do not have the same type.
    E. true == 2. False, true is equal to the number 1, which is not equal to 2.
    F. true == Boolean(2). True. Boolean(n) is true for every n except 0, which it returns false.

15. == checks value only. It converts type and checks if they are the same. === does not do type conversion. The two elements must have the same value and have the same type for the strict equality operator to return true.

16. Answer in file part1b-question16.js.

17. If passed in [1,2,3], the function returns [2,4,6]. For each index in the array, the index is passed to the callback function, which doubles the value at that index of the array.
18. Answer in file part1b-question18.js
19. The code prints 1, 4, 3, 2. 1 and 4 are printed first, then the first setTimeout prints 3 with no delay. After 1000 milliseconds, the final setTimeout prints 2.
