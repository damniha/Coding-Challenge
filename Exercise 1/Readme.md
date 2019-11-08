some () and every() functions are opposite
They are both used with arrays.

some:
=====
**some()** checks if one element inside the array *satisfies* the given condition it stops directly and returns true.
>Otherwise it returns false after checking all the elements inside the array. It doesn't work with empty arrays.

### Example:

```js
var ages = [3, 10, 18, 20];

function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.some(checkAdult);
}
```

***

every:
=====
**every()** checks if one element inside the array *doesn't satisfy* the given condition starting from the beginning.
In this case, it stops directly and returns false.
>If no false occur, every() returns true. It doesn't work with empty arrays.

### Example:

```js
var ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.every(checkAdult);
}
```

***

To know more about [**some**](https://www.w3schools.com/jsref/jsref_some.asp)
>
To know more about [**every**](https://www.w3schools.com/jsref/jsref_every.asp)
