//Button Functionality to add tasks

let btn = document.querySelector('#button1'); //grabs the add task button
let list = document.getElementById('myList'); //grabs the unordered list
let boxValue1 = document.getElementById('newTask'); //grabs the add input field text box


clearText = () => { //clears user text after adding item
  boxValue1.value = '';

}

function removeItem(button) {
      const listItem = button.parentElement; // lets the remove button actually remove tasks
      listItem.remove();
}

function completedItem(button) { //completed button checks if theres a strikethru and removes it if pressed again, otherwise it will add a strikethrough
  const listItem = button.parentElement.children[0]; //grabs parent tag <li>
     if (listItem.style.textDecoration === 'line-through') {
        listItem.style.textDecoration = 'none'; //if there's a linethrough it removes, if not, it adds
      } else {
        listItem.style.textDecoration = 'line-through';
      }
}

btn.addEventListener("click", () => {
    let newTaskAdded = document.createElement('li'); //creates list item
    // newTaskAdded.innerHTML = "<div>" + boxValue1.value + '</div> &nbsp; <button onclick="removeItem(this)">Remove</button> &nbsp; <button onclick="completedItem(this)">Complete</button>' //changing inner text of li to be same as the user input
    newTaskAdded.innerHTML = `<span> ${boxValue1.value} </span> &nbsp <button onclick="removeItem(this)">Remove</button> <button onclick="completedItem(this)">Complete</button>` //changing inner text of li to be same as the user input

    list.appendChild(newTaskAdded); //appending the li to the ol
    clearText();
});

