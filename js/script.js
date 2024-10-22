const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');

console.log(notesContainer.innerHTML)


function updateStorage(){
    localStorage.setItem('notes', notesContainer.innerHTML);
}

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem('notes');
}

showNotes();

createBtn.addEventListener('click', () => {

    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable', "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);

});



notesContainer.addEventListener('click', (e)=> {

    if(e.target.tagName.toLowerCase() === 'img'){
        e.target.parentElement.remove();
        updateStorage();
    }else if(e.target.tagName.toLowerCase() === 'p'){
        let notes = document.querySelectorAll('.input-box');

        notes.forEach(item => {
            item.onkeyup = function(){
                updateStorage();
            }
        });
    }

});


document.addEventListener('keydown', e => {
    if(e.key === 'Enter'){
        document.execCommand('insertLineBreak');
        e.preventDefault();
    }
})



