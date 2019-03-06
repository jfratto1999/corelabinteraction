console.log("testing")

var myList = document.getElementById("wrapper");

console.log("myList")


var myFunction = function(){

	var myNewElement = document.createElement("li");
	myNewElement.className = "myaddedListElement";
	myNewElement.innerHTML = "THANK YOU";

	myList.appendChild(myNewElement);
}

myList.onclick = myFunction;



