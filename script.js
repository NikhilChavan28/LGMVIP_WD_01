const inputItem = document.querySelector('#todo');
const todoL = document.querySelector('#todolist');

const data = [];
inputItem.addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        addtodo(this.value);
        const i = 0;
        data.push(this.value)
        localStorage.setItem("listItem", JSON.stringify(data));
        console.log(data);

        this.value = "";
    }

})
window.onload = function nem() {

    const lsnotes = JSON.parse(localStorage.getItem("listItem"));
    // console.log(lsnotes);
    if (lsnotes === null) {
        addtodo("");
    } else {
        lsnotes.forEach(
            (lsnotes) => {
                addtodo(lsnotes);
            }

        );
    }


}



/* <div class="container">
<input type="text" id="todo" placeholder="Write Your Task here ">
<ul id="todolist">


</ul>
</div> */
// const savenotes = () => {
//     const notes = document.querySelectorAll('#todo')
//     console.log(notes);
//     const data = [];
//     notes.forEach(
//         (listItem) => {
//             data.push(listItem.value)
//         }
//     )

//     console.log(data);
// }


const addtodo = (item) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `  
     ${item}
     <button id="btn"> Clear</button>
     
  `
    listItem.addEventListener('click', function() {
        listItem.classList.toggle("done")
            // listItem.classList.add("done");

    })
    todoL.appendChild(listItem);


    listItem.querySelector('#btn').addEventListener('click', () => {
            listItem.remove();
            listItem.remove(localStorage)


        })
        // savenotes();


}