// JavaScript for the base.html file
const red = document.getElementsByClassName("red")[0];
const yellow = document.getElementsByClassName("yellow")[0];
const green = document.getElementsByClassName("green")[0];

const items = document.querySelectorAll(".list ul li");

// Active state for left side section
items.forEach(item => {
    item.addEventListener("click", () => {
        items.forEach(li => li.classList.remove("active"));
            item.classList.add("active");

        });
});

// Set the first item as active by default
items[0].classList.add("active");

// Popover menu for left side section
const menu_btn = document.querySelector(".menu-btn");
const popover_menu =  document.querySelector(".popover-menu");

menu_btn.addEventListener("click", function(e){
    // Prevent the click event from propagating to the document
    e.stopPropagation();
    popover_menu.classList.toggle("show");
    

})
// Close the popover menu when clicking outside of it
document.addEventListener("click", (e) => {
    if(!menu_btn.contains(e.target) && !popover_menu.contains(e.target)){
        popover_menu.classList.remove("show");
    }
    if(popover_menu.contains(e.target)){
        popover_menu.classList.remove("show");
    }

})

const btn_of_edit = document.querySelector(".btn-of-edit");
const popover_task1 = document.querySelector("#popover-task1");

btn_of_edit.addEventListener("click",(e) =>{
    e.stopPropagation();
    popover_task1.classList.toggle("show");
})

// Close the popover menu when clicking outside of it
document.addEventListener("click", (e) => {
    if(!btn_of_edit.contains(e.target) && !popover_task1.contains(e.target)){
        popover_task1.classList.remove("show");
    }
    if(popover_task1.contains(e.target)){
        popover_task1.classList.remove("show");
    }
});

const add_task_container = document.querySelector(".add-task");
const add_task_btn = document.querySelector("#add-task");
const form = document.querySelector("#add-task-form");

const tasks = [];

add_task_btn.addEventListener("click",() =>{
    // alert("clicked");
    add_task_container.style.display = "block";
});

    document.addEventListener("click", (e) => {
        if(!add_task_container.contains(e.target) && !add_task_btn.contains(e.target)){
            add_task_container.style.display = "none";
        }
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = form.querySelector('input[type="text"]').value;
        const description = form.querySelector('textarea').value;
        const category = form.querySelector('select[name="category"]').value;
        const date = form.querySelector('input[type="date"]').value;
        const important = form.querySelector('#importante').value;
        const time = form.querySelector("#time").value;
    
        const task = {
            title: title,
            description: description,
            category: category,
            date: date,
            important: important,
            time : time,
            completed: false
        };

        tasks.push(task);
        renderTasks(title,description,time);
        console.log(tasks);

    });

    const tasks_container = document.querySelector(".tasks ul");

    function renderTasks(title,desc,time) {
        const li = document.createElement("li");
        li.classList.add("task");
         li.innerHTML = `
         <div class="task-top">
                <div class="task-top-left">
                  <input type="checkbox" name="completed" id="task1-checkbox"> 
                  <h6 class="task-title" id="task1">${title}</h6>
                </div>
                <div class="menu-of-task-wrapper">
                  <button class="btn-of-edit">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 menu-of-task-1">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                        </svg>
                  </button>

                  <div id="popover-task1">

                      <ul>
                          <li><a href="#profile">Edit</a></li>
                          <li><buttton>Remove</button></li>
                      </ul>

                  </div>

                </div>

              </div>
              <p class="description">${desc}</p>
              <p class="time">${time} - 3:50</p>
         `
         tasks_container.appendChild(li);
    }



