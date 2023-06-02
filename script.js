//select all elements
const form = document.querySelector("#new-item-form")
const list = document.querySelector("#list")
const input = document.querySelector("#item-input")
//add new item when submit is clicked
form.addEventListener("submit", e => {
    e.preventDefault();

    //create new item
    const item = document.createElement('div')
    item.innerText = input.value
    item.classList.add("list-item")
  
    //add item to list
    list.appendChild(item);

    //clear input
    input.value = " ";

    //function to delete item when clicked on it
    item.addEventListener("click",()=>{
        list.removeChild(item);
        localStorage.removeItem(item.innerText)
        item.remove();
    })

})