// Procurar o botão
document.querySelector("#add-time")
//Quando clicar no botão 
.addEventListener('click', cloneField)


//Executar uma ação
function cloneField() {
    //Duplicar os camposde horários
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //Limpar os campos clonados 
    const fields = newFieldContainer.querySelectorAll('input')

    // Para cada campo, limpar
    fields.forEach(field => field.value="") //arrow function

    //Colocar na página, dentro da div schedule-items
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
    
}
