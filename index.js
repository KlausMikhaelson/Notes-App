showNotes();


let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
    let noted = document.getElementById("noted");
    let notes = localStorage.getItem("notes");
  
    if (notes == null) notesObj = [];
    else notesObj = JSON.parse(notes);
  
    notesObj.push(noted.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    noted.value = "";
  
    showNotes();
});

function showNotes() {
    let notes = localStorage.getItem("notes");

    if(notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";

    notesObj.forEach(function(element, index) {
        html += `<div class="notepad">
            <div class="card-body">
                <h5 class="card-title">
                    Note ${index + 1}
                </h5>
                <p class="card-text">
                    ${element}
                </p>
                <button id="${index}" onclick="deleteNote(this.id)" class="delete-btn">Delete Note</button>

            </div>
        </div>`;
    });
    let notesElm = document.getElementById("notes");

    if(notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Nothing to show !
        Use "Add a Note" section above to add Notes.`;

    }



};

function deleteNote(index) {
    let notes = localStorage.getItem("notes");

    if(notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);

    localStorage.setItem("notes",
    JSON.stringify(notesObj));

    showNotes();
}