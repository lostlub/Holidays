const add_task_btn = document.querySelector("#add-task");
const form_wrapper = document.querySelector(".add-task");
const form = document.querySelector("#add-task-form");


const list = document.querySelectorAll(".list ul li");
let tasks = [
  {
    id: 1776934479108,
    title: "Finish report",
    description: "Complete project report",
    category: "Work",
    date: "2026-04-03",
    st_time: "10:00",
    end_time: "12:00",
    importante: "yes",
    pending: true
  },
  {
    id: 1776934479109,
    title: "Buy groceries",
    description: "Milk, eggs, fruits",
    category: "Personal",
    date: "2026-04-04",
    st_time: "17:00",
    end_time: "18:00",
    importante: "no",
    pending: true
  },
  {
    id: 1776934479110,
    title: "Gym workout",
    description: "Leg day session",
    category: "Health",
    date: "2026-04-05",
    st_time: "06:00",
    end_time: "07:30",
    importante: "yes",
    pending: true
  },
  {
    id: 1776934479111,
    title: "Study DSA",
    description: "Binary Search practice",
    category: "Study",
    date: "2026-04-06",
    st_time: "20:00",
    end_time: "22:00",
    importante: "yes",
    pending: true
  }
];

let editId = null;

// random clicks detection

document.addEventListener("click",(e)=>{

    const menu_btn = e.target.closest(".menu");
    const menu = document.querySelector(".popover-menu");

    if(menu_btn){
        menu.style.display = "block";   
        return;
    }

    if(!menu_btn && !e.target.closest(".popover-menu")){
        // console.log("clicked outside")
        menu.style.display = "none"
        
    }


    //tasks edit and delete menu
    const btn = e.target.closest(".menu-of-task-1");

    if(btn){
        const sibilng = btn.closest(".btn-of-edit");
        const task_menu = sibilng.nextElementSibling;
        // console.log("task-menu clicked");
        task_menu.style.display = "block";
        return;
    }

    if(!e.target.closest(".menu-of-task-1" && !e.target.closest(".popover-task1"))){
            document.querySelectorAll(".popover-task1").forEach(m => m.style.display = "none")
    }

     //edit click chesaka if outof form click cheste form undo
   if(!e.target.closest(".menu-of-task-1") && !e.target.closest("#add-task-form") && !e.target.closest("#add-task")){
        form_wrapper.classList.remove("active");
    }


    //delect task
    const delect_task = e.target.closest(".delete-task");
    if(delect_task){
        const id = Number(delect_task.dataset.id);
         tasks = tasks.filter(t => t.id !== id);
        console.log(tasks);

        renderTasks(tasks);
    }

    // edit 
    const edit_btn = e.target.closest(".edit-task");

    if(edit_btn){
        console.log("edit btn clicked");
        const id = Number(edit_btn.dataset.id);

        console.log(id)
        const task = tasks.find(t =>t.id === id)
        console.log(task)
        document.querySelector("#title").value = task.title;
        document.querySelector("#description").value = task.description;
        document.querySelector("#category").value = task.category;
        document.querySelector("#date").value = task.date;
        document.querySelector("#st-time").value = task.st_time;
        document.querySelector("#end-time").value = task.end_time;
        document.querySelector("#importante").value = task.importante;

        form_wrapper.classList.add("active");
        editId = id;
    }


});


// add task;
add_task_btn.addEventListener("click",()=>{
    console.log("add btn clicked")
    // form.style.display = "block";
    form_wrapper.classList.toggle("active");

})



form.addEventListener("submit",(e)=>{
    e.preventDefault();
    
   
    
    const title = document.querySelector("#title");
    const description = document.querySelector("#description");
    const category = document.querySelector("#category");
    const date = document.querySelector("#date").value;
    const st_time = document.querySelector("#st-time");
    const end_time = document.querySelector("#end-time");
    const importante = document.querySelector("#importante");



    const task ={
        id : Date.now(),
        title: title.value,
        description : description.value,
        category: category.value,
        date: date,
        st_time: st_time.value,
        end_time: end_time.value,
        importante: importante.value,
        pending: true
    }
        
    // })
if(editId !== null){
   tasks = tasks.map(t => t.id === editId ? {
        ...t,
        title : title.value,
        description: description.value,
        category : category.value,
        date: date,
        st_time : st_time.value,
        end_time : end_time.value,
        importante: importante.value
    } : t )
    editId = null;
    form.reset();
    form_wrapper.classList.remove("active");
    renderTasks(tasks);
    return;
}else{
     
    
    tasks.push(task);
    
    form_wrapper.classList.remove("active");
    form.reset();
    renderTasks(tasks);

}; //end of if
})


// render function to create div for tasks from tasks array
const task_container = document.querySelector(".tasks ul");

function renderTasks(arr) {

    task_container.innerHTML = "";

    arr.forEach(t =>{

    const li = document.createElement("li");
    li.classList.add("task");


    li.innerHTML  = `
        <div class="task-top">
                <div class="task-top-left">
                  <input type="checkbox" name="checkbox" class="checkbox" id="task1-checkbox" ${t.pending? "": "checked"} data-id="${t.id}"> 
                  <h6 class="task-title" id="task1">${t.title}</h6>
                </div>
                <div class="menu-of-task-wrapper">
                  <button class="btn-of-edit">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 menu-of-task-1">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                        </svg>
                  </button>

                  <div class="popover-task1">

                      <ul>
                          <li><button href="#profile" class="taskmenu edit-task" data-id="${t.id}">Edit</button></li>
                          <li><button class="taskmenu delete-task" data-id="${t.id}">Remove</button></li>
                      </ul>

                  </div>

                </div>

              </div>
              <p class="description">${t.description}</p>
              <p class="time">${t.st_time} - ${t.end_time}</p>
    `
    task_container.appendChild(li);
});



};// end of render


renderTasks(tasks);


//========================================================filtering of tasks========================================================

//highlight for all tasks,important
list.forEach(t =>{
   t.addEventListener("click", ()=>{
    list.forEach(cat => cat.classList.remove("active"));

    t.classList.add("active")
   })   
});


const all_filter = document.querySelector(".all-1");
const imp_filter = document.querySelector(".imp-2");
const comp_filter = document.querySelector(".comp-3");
const pend_filter = document.querySelector(".pend-4");

let currentFilter = "all";


document.addEventListener("change",(e)=> {

    const checkbox = e.target.closest(".checkbox");
    
    if(checkbox){
    const id = Number(checkbox.dataset.id);
    console.log(id);

      tasks = tasks.map(t => t.id === id? {...t,pending: !checkbox.checked}: t)

    }

    applyFilter();
});

function applyFilter() {
    let filtered = tasks;

    if(currentFilter === "important"){
        filtered = tasks.filter( t => t.importante === "yes")
    }
    
    if(currentFilter === "pending"){
        filtered = tasks.filter(t => t.pending)
    }

    if(currentFilter === "completed"){
        filtered = tasks.filter(t => !t.pending);
    }
    if(currentFilter === "all"){
        filtered = tasks;
    }

    renderTasks(filtered);
}

all_filter.addEventListener("click", ()=> {currentFilter = "all"; applyFilter()});
imp_filter.addEventListener("click", ()=> {currentFilter = "important"; applyFilter()});
comp_filter.addEventListener("click", ()=> {currentFilter = "completed"; applyFilter()});
pend_filter.addEventListener("click", ()=> {currentFilter = "pending"; applyFilter()});