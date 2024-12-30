const validationForm = document.querySelector('form')
const btnSubmit = document.querySelector('#btn-submit').addEventListener('click', (e) =>{
    e.preventDefault()
    
    const name = document.querySelector('#name').value.trim()
    const ocupacao = document.querySelector('#ocupacao').value.trim()
    const dataNas = document.querySelector('#dataN').value.trim()
    const skills = document.querySelector('#check-skills').value.trim()
    const links = document.querySelector('#links').value.trim()
    const contact = document.querySelector('#contact').value.trim()
    const email = document.querySelector('#email').value.trim()

    if(!name) {
        alert("Por favor, preencha o campo do nome!")
        return
    }else{
        console.log('Nome válido:', name);
    }
    if (!ocupacao) {
        alert('Por favor, preencha sua ocupação!')
        return
    }else{
        console.log('Ocupação válida:', ocupacao);
        
    }
    if(!dataNas){
        alert('Por favor, diga sua data de Nascimento!')
        return
    }else{
        console.log('Data de nascimento válido:', dataNas);
    }
    if(!skills){
        alert('Por favor, preencha sua habilidades!')
        return
    }
    else{
        console.log('Habilidades válidas:', skills);
    }
    if(!links){
        alert('Por favor, digite um link para seu perfil ou portfólio!')
        return
    }
    else{
        console.log('Link válido:', links);
    }
    if(!contact){
        alert('Por favor, preencha o campo dos contatos!')
        return
    }
    else{
        console.log('contatos válidos:', contact);
    }
    if(!email){
        alert('Preencha o campo do email!')
        return
    }
    else{
        console.log('Email válido:', email);
        
    }
}) 