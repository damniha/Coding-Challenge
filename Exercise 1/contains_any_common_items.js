/* Given two arrays, create a function that let's the user know (true/false) whether
these two arrays contain any common items*/
var array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];
const array3 = ['z','y','x'];

const checkIfMath =(arr1, arr2) =>{
	const s=(arr1.length>=arr2.length)?arr1.join(''):arr2.join('');
	var match = false;
	if (arr1.length>=arr2.length){
		arr2.forEach( function(element) {
			if(s.includes(element))
				match=true;
		});
	}
	else {
		arr1.forEach( function(element) {
			if(s.includes(element))
				match=true;
		});
	}
	return match;
}

const checkIfMath2 =(arr1, arr2) =>{
	const s=(arr1.length>=arr2.length)?arr1.join(''):arr2.join('');
	if (arr1.length>=arr2.length){
		return arr2.some(element => s.includes(element));
	}
	else {
		return arr1.some(element => s.includes(element));
	}
}

console.log(checkIfMath(array1, array2));
console.log(checkIfMath(array1, array3));

console.log(checkIfMath2(array1, array2));
console.log(checkIfMath2(array1, array3));