const form = document.querySelector("form");
const tbodyEl = document.querySelector("tbody");
const table = document.querySelector("table");

    var data_list = "";

//Function for input field, tables and creating buttons

function onAddNote(e) {
    e.preventDefault();
    const input = document.getElementById("input").value;
        data_list = data_list+'\n'+input;
        
    tbodyEl.innerHTML += `<tr><td>${input.slice(0,30) + `. . . .`}<button class="modalButton">Read</button><button class="deleteBtn">Clear</button></td></tr>`;

 //function for modal show and modal removal   
}
function onButtons(e) {
    if (!e.target.classList.contains("deleteBtn")) {
        if (!e.target.classList.contains("modalButton")) {
            return;
        }
        //creating modal and to append it.
        const modal = document.createElement('div')
        modal.classList.add('modal')
        const child = document.createElement('p')
        child.classList.add('child')
        child.innerHTML = data_list;
        modal.appendChild(child)
        document.body.appendChild(modal)
        //creating modal-removal & append
        const modalBtn = document.createElement('button')
        modalBtn.innerText = "Close Note";
        modalBtn.style.background = "";
        modalBtn.classList.add('modalBtn')
        modal.appendChild(modalBtn)
        //modal-closing button function
        modalBtn.addEventListener('click', function () {
            document.body.removeChild(modal)
        })
    } else {
        //deleting table row
        const btn = e.target;
        btn.closest("tr").remove();
    }
}
// function clicker

table.addEventListener("click", onButtons);
form.addEventListener("submit", onAddNote);

