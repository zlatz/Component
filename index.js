let icon = document.getElementById(`icon`)
let modal = document.getElementById(`modal`)
let checker = true

icon.addEventListener(`click`, function(event){
    if(checker === true){
        modal.classList.remove(`small-modal-container`)
        modal.classList.add(`visible-small-modal-container`)
        checker = false
    }else if(checker === false){
        modal.classList.remove(`visible-small-modal-container`)
        modal.classList.add(`small-modal-container`)
        checker = true
    }
})