window.onload = () => {
    const nume = document.getElementById('nume')
    const prenume = document.getElementById('prenume')
    const email = document.getElementById('email')
    const telefon = document.getElementById('telefon')
    const form = document.getElementById('form')
    const errorElement = document.getElementById('error')
    const varsta = document.getElementById('varsta')

    // form.addEventListener('submit', (e) => {
    //     let messages = []
    //     if( nume.value === '' || nume.value == null){
    //         messages.push('Numele este obligatoriu')
    //     }
    //     if( prenume.value === '' || prenume.value == null){
    //         messages.push('Prenumele este obligatoriu')
    //     }
    //     if( email.value === '' || email.value == null){
    //         messages.push('E-Mailul este obligatoriu')
    //     }
    //     if( telefon.value === '' || telefon.value == null){
    //         messages.push('Numarul de telefon este obligatoriu')
    //     }
    //     if( varsta.value === '' || varsta.value == null){
    //         messages.push('Varsta este obligatorie')
    //     }
    //     if (varsta.value != '' &&  varsta.value != null && varsta.value < 18) {
    //         messages.push('Trebuie sa fii major pentru a participa')
    //     }
    //     if (messages.length > 0) {
    //         e.preventDefault() 
    //         errorElement.innerText = messages.join(' \n')
    //     }
    // })
    let ok=0;
    nume.onkeydown = function(e)  {
        console.log(ok);
        //Validare nume
        const regexNume = /^[A-Za-z][A-Za-z0-9_]{1,20}$/;
        console.log(nume.value);
        console.log(regexNume.test(nume.value) && nume.value != '' && nume.value != null);
        if(regexNume.test(nume.value))
        {
            document.getElementById('validareNume').innerText = "Nume valid";
            document.getElementById('validareNume').style.color='#33cc33';
            ok=0;
        }
        else{
            document.getElementById('validareNume').innerText = "Nume invalid";
            document.getElementById('validareNume').style.color = '#ff0000';
            ok=1;  
        }

    }
    prenume.onkeydown = function(e)  {
        console.log(ok);
        //Validare prenume
        const regexPrenume = /^[A-Za-z][A-Za-z0-9_]{1,20}$/;
        console.log(prenume.value);
        console.log(regexPrenume.test(prenume.value));
        if(regexPrenume.test(prenume.value) && prenume.value != '' && prenume.value != null)
        {
            document.getElementById('validarePrenume').innerText = "Prenume valid";
            document.getElementById('validarePrenume').style.color='#33cc33';
            ok=0;
        }
        else{
            document.getElementById('validarePrenume').innerText = "Prenume invalid";
            document.getElementById('validarePrenume').style.color = '#ff0000';
            ok=1;  
        }
    }
    email.onkeydown = function(e)  {
        //Validare main
        console.log(ok);
        const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        console.log(email.value);
        console.log(regexEmail.test(email.value));
        if(regexEmail.test(email.value) && email.value != '' && email.value != null)
        {
            document.getElementById('validareEmail').innerText = "Email valid";
            document.getElementById('validareEmail').style.color='#33cc33';
            ok=0;
        }
        else{
            document.getElementById('validareEmail').innerText = "Email invalid";
            document.getElementById('validareEmail').style.color = '#ff0000'; 
            ok=1; 
        }
    }
    telefon.onkeydown = function(e)  {
        //Validare telefon
        console.log(ok);
        const regexTelefon = /^[0-9]{9}$/;
        console.log(telefon.value);
        console.log(regexTelefon.test(telefon.value));
        if(regexTelefon.test(telefon.value) && telefon.value != '' && telefon.value != null)
        {
            document.getElementById('validareTelefon').innerText = "Numar de telefon valid";
            document.getElementById('validareTelefon').style.color='#33cc33';
            ok=0;
        }
        else{
            document.getElementById('validareTelefon').innerText = "Numar de telefon invalid";
            document.getElementById('validareTelefon').style.color = '#ff0000'; 
            ok=1; 
        }
        
    }
    form.addEventListener('submit', (e) => {
        if(ok==1) e.preventDefault();
    })
}
    
    
