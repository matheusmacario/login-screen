document.getElementById('btn-submit').addEventListener('click', e =>{

console.log('you have pushed the button')

}) 

document.querySelector('#form-login').addEventListener('submit', e=>{

    e.preventDefault()

    let email = document.querySelector ('#email').value
    let password = document.querySelector ('#password').value

    let json = {
        email:email,
        password:password
    };

    if(!json.email){

        console.error('the email field has to be filled')

    }else if (!json.password){
        
        console.error('the password field has to be filled');

    } else {

        console.info('data successfully validated')

    }

/*     console.log(json)

    let variavelStringJSON = JSON.stringify(json)

    console.log(variavelStringJSON)

    let jsonParse = JSON.parse (variavelStringJSON)

    console.log(jsonParse)
    console.log(jsonParse.email) */

})
