var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	var button = document.createElement("button");
	li.appendChild(button);
	button.innerText = "Delete";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

 function toggleDone(e) {
 	if (e.target.tagName === "LI") {
 		e.target.classList.toggle("done");
 	}
 }

function deleteItem(e) {
	if (e.target.tagName === "BUTTON") {
		e.target.parentElement.remove();
	}
}

ul.addEventListener("click", deleteItem);
ul.addEventListener("click", toggleDone);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
