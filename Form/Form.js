window.onload = () => {
    const nume = document.getElementById('nume')
    const prenume = document.getElementById('prenume')
    const email = document.getElementById('email')
    const telefon = document.getElementById('telefon')
    console.log(telefon.lenght);
    const form = document.getElementById('form')
    const errorElement = document.getElementById('error')
    const varsta = document.getElementById('varsta')

    form.addEventListener('submit', (e) => {
        let messages = []
        if( nume.value === '' || nume.value == null){
            messages.push('Numele este obligatoriu')
        }
        if( prenume.value === '' || prenume.value == null){
            messages.push('Prenumele este obligatoriu')
        }
        if( email.value === '' || email.value == null){
            messages.push('E-Mailul este obligatoriu')
        }
        if( telefon.value === '' || telefon.value == null){
            messages.push('Numarul de telefon este obligatoriu')
        }
        if( varsta.value === '' || varsta.value == null){
            messages.push('Varsta este obligatorie')
        }
        if (varsta.value != '' &&  varsta.value != null && varsta.value < 18) {
            messages.push('Trebuie sa fii major pentru a participa')
        }
        if (messages.length > 0) {
            e.preventDefault() 
            errorElement.innerText = messages.join(' \n')
        }
    })
}