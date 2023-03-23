const button = document.getElementById('openModal')
const modalWrapper = document.querySelector('.modal-wrapper')

button.onclick = function (){
    modalWrapper.classList.remove('invisible')
}

//fechar a janela

document.addEventListener('keydown', function (event) {
    const isEscKey = event.key === 'Escape'
    if (isEscKey){
        modalWrapper.classList.add('invisible')
    }
    
})