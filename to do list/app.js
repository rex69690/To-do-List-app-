const addTask = () => {
  
  document.getElementById("addItemButton").addEventListener("click", addTaskHandler);
};

const addTaskHandler = () => {
  let inputValue = document.getElementById("itemInput").value;

  if (inputValue === "") {
    alert("please enter a valid input");
  } else {
    let ul = document.getElementById("itemList");
    let li = document.createElement("li");
    li.textContent = inputValue;
    ul.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "✖";
    li.appendChild(span);

    //clearing a task-------
    span.addEventListener("click", function () {
      
      li.remove();
    });
  }

//   --clearing placeholder
  document.getElementById("itemInput").value = "";
};

const clearList = () => {
  document.getElementById("itemList").innerHTML = "";
};



///form user name coantcat passworr submit detials om a dashboard