const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];
const array3 = ['z','y','x'];

/*
array1 ===> obj {
		a:true,
		b:true,
		c:true,
		x:true
	}
	array2[index] === array1.props
*/

const checkIfMatch =(arr1, arr2) =>{
	//loop through first array and create object where 	properties === items in the array.
	let map = {};
	  for (let i=0; i < arr1.length; i++) { // O(a)
	    if(!map[arr1[i]]) {
	    	const item = arr1[i];
	    	map[item] = true;
	    }
	}
	// loop through second array and check if item in second array exists on created object. 
	for (let j=0; j < arr2.length; j++) { // O(b)
	    if (map[arr2[j]]) {
	    	return true;
	    }
	}
	return false;
}
//O(a + b) Time Complexity
//O(a) Space Complexity

console.log(checkIfMatch(array1, array2));
console.log(checkIfMatch(array3, array1));

function containsCommonItem(arr1, arr2) {
  return arr1.some(item => arr2.includes(item))
}
console.log(containsCommonItem(array1, array2));
console.log(containsCommonItem(array3, array1));