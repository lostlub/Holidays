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

add_task_btn.addEventListener("click",() =>{
    
    alert("clicked")
    

});