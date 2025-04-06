const input = document.querySelector("#input");
const arr = [];
const list = document.querySelector("#list");

function renderTask() {
  list.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "") {
      list.innerHTML += `<li>${arr[i]}</li> <button class="bg-red-700 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition" onclick="deleteTask(${i})">Delete</button>
          <button class="bg-green-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition" onclick="editTask(${i})">Edit</button>`;
      console.table(arr);
    }
  }
  input.value = "";
}

function addTask() {
  //   list.innerHTML = "";

  arr.push(input.value.toUpperCase());
  renderTask();
}

function deleteTask(index) {
  //   console.log(arr);
  arr.splice(index, 1);
  //   console.table(arr);
  renderTask();
}

function editTask(index) {
  let edit = prompt("Enter the edit Task");
  if (edit !== null) {
    arr.splice(index, 1, edit.toLocaleUpperCase());
    renderTask();
  }
}
